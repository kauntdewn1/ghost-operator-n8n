// components/FormPrompt.tsx
import React, { useState } from "react"
import { triggerGhost } from "../services/n8n"

type Persona = '/cash' | '/web3' | '/oni' | '/mkt' | '/dev' | '/creator' | '/flowoff' | '/flw'

const PERSONAS: { value: Persona; label: string }[] = [
  { value: '/cash', label: 'MELLØ CASH' },
  { value: '/web3', label: 'MELLØ WEB3' },
  { value: '/oni', label: 'MELLØ ONI' },
  { value: '/dev', label: 'MELLØ.DEV' }
]

export function FormPrompt() {
  const [persona, setPersona] = useState<Persona>('/cash')
  const [idea, setIdea] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!idea.trim()) {
      setError("Por favor, insira uma ideia para o ritual")
      return
    }

    try {
      setIsLoading(true)
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string
      console.log('Enviando requisição:', {
        persona,
        idea: idea.trim(),
        chatId,
        baseURL: import.meta.env.VITE_N8N_BASE_URL
      })
      await triggerGhost(persona, idea.trim(), chatId)
      setIdea("")
    } catch (err: any) {
      console.error('Erro completo:', err)
      const errorMessage = err.response 
        ? `Erro ${err.response.status}: ${err.response.data?.message || err.message}`
        : err.message || "Erro ao invocar o Ghost"
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="persona" className="text-sm font-medium">
          Selecione o Persona:
        </label>
        <select
          id="persona"
          value={persona}
          onChange={(e) => setPersona(e.target.value as Persona)}
          className="bg-gray-800 border border-gray-700 rounded p-2"
          disabled={isLoading}
        >
          {PERSONAS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="idea" className="text-sm font-medium">
          Ideia do Ritual:
        </label>
        <input
          id="idea"
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Insira a ideia do ritual"
          className="bg-gray-800 border border-gray-700 rounded p-2"
          disabled={isLoading}
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm p-2 bg-red-900/20 rounded">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 px-4 rounded font-medium ${
          isLoading
            ? 'bg-gray-700 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isLoading ? 'Invocando Ghost...' : 'Enviar para o Ghost'}
      </button>
    </form>
  )
}
