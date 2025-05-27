# Ghost Operator – n8n Ritual Automation

Interface para automação de rituais usando n8n, integrando com IA e serviços de mídia.

## 🚀 Funcionalidades

- Invocação de diferentes personas (MELLØ CASH, WEB3, ONI, DEV)
- Integração com Google Gemini para geração de texto
- Integração com Google Vertex AI para geração de imagens
- Integração com Google Text-to-Speech para áudio
- Envio automático via Telegram

## 🛠️ Tecnologias

- React + TypeScript
- Vite
- Tailwind CSS
- n8n
- Google Cloud Platform (Gemini, Vertex AI, Text-to-Speech)
- Telegram Bot API

## 📋 Pré-requisitos

- Node.js 18+
- Conta no Google Cloud Platform
- Token do Bot do Telegram
- Instância n8n configurada

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/ghost-operator-n8n.git
cd ghost-operator-n8n
```

2. Instale as dependências:
```bash
cd dashboard
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais.

## ⚙️ Configuração

### Variáveis de Ambiente

```env
# N8N
VITE_N8N_USER=seu_usuario
VITE_N8N_PASS=sua_senha
VITE_N8N_BASE_URL=https://seu-n8n.com

# Telegram
VITE_TELEGRAM_CHAT_ID=seu_chat_id
```

### Google Cloud Platform

1. Ative as APIs necessárias:
   - Gemini API
   - Vertex AI API
   - Cloud Text-to-Speech API

2. Configure as credenciais:
   - Crie uma chave de serviço
   - Baixe o arquivo JSON
   - Configure as variáveis de ambiente

## 🚀 Uso

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse `http://localhost:5173`

3. Selecione um persona e insira sua ideia

4. O Ghost Operator processará sua solicitação e enviará o resultado via Telegram

## 📝 Personas Disponíveis

- **MELLØ CASH**: Focado em finanças e dinheiro
- **MELLØ WEB3**: Especializado em blockchain e criptomoedas
- **MELLØ ONI**: Persona mais sombrio e místico
- **MELLØ.DEV**: Focado em desenvolvimento e tecnologia

## 🔒 Segurança

- Todas as credenciais são armazenadas em variáveis de ambiente
- Autenticação básica no n8n
- Rate limiting implementado
- Validação de inputs

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte, envie um email para seu-email@exemplo.com ou abra uma issue no GitHub.
