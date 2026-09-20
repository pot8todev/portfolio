# 1. Etapa de dependências
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copia arquivos de definição de dependências
COPY package.json package-lock.json* ./

# Instala as dependências de produção e desenvolvimento
RUN npm ci

# 2. Etapa de build
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desativa a coleta de telemetria do Next.js durante a compilação
ENV NEXT_TELEMETRY_DISABLED=1

# Executa o build de produção do Next.js
RUN npm run build

# 3. Etapa final de execução (Runner)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Cria um usuário não-root para execução segura do container
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia a pasta publica e os arquivos compilados com as permissões corretas
# Copia public apenas se existir no estágio builder
COPY --from=builder /app/public* ./public/
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Inicia a aplicação usando o servidor standalone gerado pelo Next.js
CMD ["node", "server.js"]
