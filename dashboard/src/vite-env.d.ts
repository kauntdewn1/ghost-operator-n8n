/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_N8N_USER: string
  readonly VITE_N8N_PASS: string
  readonly VITE_N8N_BASE_URL: string
  readonly VITE_TELEGRAM_CHAT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 