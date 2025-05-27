import { useState } from "react"
import { triggerGhost } from "../services/n8n"

export function ButtonTrigger() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    setError(null)
    try {
      setIsLoading(true)
      console.log('Enviando requisição rápida:', {
        baseURL: import.meta.env.VITE_N8N_BASE_URL
      })
      await triggerGhost("/cash", "Pix é o novo dízimo disfarçado")
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
    <div className="space-y-2">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`w-full py-2 px-4 rounded font-medium ${
          isLoading
            ? 'bg-gray-700 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {isLoading ? 'Invocando Ghost...' : 'Testar Ghost Rápido'}
      </button>
      
      {error && (
        <div className="text-red-500 text-sm p-2 bg-red-900/20 rounded text-center">
          {error}
        </div>
      )}
    </div>
  )
}