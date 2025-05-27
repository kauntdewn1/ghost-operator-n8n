import { FormPrompt } from "./components/FormPrompt"
import { ButtonTrigger } from "./components/ButtonTrigger"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-10 font-mono space-y-8">
      <h1 className="text-3xl font-bold">👁️‍🗨️ Ghost Operator Console</h1>
      <FormPrompt />
      <hr className="border-gray-600" />
      <ButtonTrigger />
    </div>
  )
}
  