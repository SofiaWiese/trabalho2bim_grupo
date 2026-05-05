import { useState } from "react"

const Checkout =({...props})=>{
    const [nome, setNome]= useState("")
    const [email, setEmail]= useState("")
    const [endereco, setEndereco]= useState("")

    const handleSubmit = () => {
    if (!nome || !email || !endereco) {
      alert("Preenche tudo aí 😡")
      return
    }

    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Checkout
        </h2>

        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Botão */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Finalizar Compra
        </button>

        </div>
    </div>
    )
}
export default Checkout