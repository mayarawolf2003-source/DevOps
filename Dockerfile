# Usa uma imagem oficial do Node.js (versão leve/slim)
FROM node:20-slim

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia o seu arquivo da calculadora para dentro do container
COPY calculadora.js .

# Comando que será executado quando o container iniciar
CMD ["node", "calculadora.js"]
