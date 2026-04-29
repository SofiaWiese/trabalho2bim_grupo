import { useState } from "react"

const Checkout =({...props})=>{
    const [nome, setNome]= useState("")
    const [sobrenome, setSobrenome]= useState("")
    const [telefone, setTelefone]= useState("")
    const [cep, setCEP]= useState("")
    const [numeroCasa, setNumeroCasa]= useState("")

    return<div className="w-full h-full bg-green-200"{...props}>

        <h2 className="text-2xl font-bold text-center mt-6">Checkout</h2>


        <div className="flex flex-col m-1 items-stretch md:items-center bg-white rounded-lg m-40 p-10 ">
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <div className="flex flex-row m-2">
                <p>Nome: </p>
                <input type="text" placeholder="Digite aqui seu nome" value={nome} onChange={(value)=>setNome(value)}></input>
            </div>
            <div className="flex flex-row m-2">
                <p>Sobrenome: </p>
                <input type="text" placeholder="Digite aqui seu sobrenome" value={sobrenome} onChange={(value)=>setSobrenome(value)}></input>
            </div>
            <div className="flex flex-row m-2">
                <p>Telefone: </p>
                <input type="text" placeholder="Digite aqui seu telefone" value={telefone} onChange={(value)=>setTelefone(value)}></input>
            </div>
            <div className="flex flex-row m-2">
                <p>CEP: </p>
                <input type="text" placeholder="Digite aqui seu CEP" value={cep} onChange={(value)=>setCEP(value)}></input>
            </div>
            <div className="flex flex-row m-2">
                <p>Número da casa: </p>
                <input type="text" placeholder="Digite aqui o número da sua casa" value={numeroCasa} onChange={(value)=>setNumeroCasa(value)}></input>
            </div>
        </div>

        <div className="flex flex-col w-full max-w-xl bg-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Tipo de entrega</h3>
            <div className="flex flex-row m-2">
                <input type="radio" id="padrao" name="entrega"></input>
                <label htmlFor="padrao"> Entega padrão (R$0,00)</label>
            </div>
            <div className="flex flex-row m-2">
                <input type="radio" id="rapida" name="entrega"></input>
                <label htmlFor="rapida">Entega rápida (R$10,00)</label>
            </div>
            <div className="flex flex-row m-2">
                <input type="radio" id="super_rapida" name="entrega"></input>
                <label htmlFor="super_rapida">Entrega super-rápida (R$25,00)</label>
            </div>
        </div>

        <div className="flex flex-col items-stretch md:items-center bg-white rounded-lg m-20 p-10">
            <h3 className="text-lg font-semibold mb-4">Forma de pagamento</h3>
            <div className="flex flex-row m-2">
                <input type="radio" id="credito" name="pagamento"></input>
                <label htmlFor="credito"> Cartão de crédito</label>
            </div>
            <div className="flex flex-row m-2">
                <input type="radio" id="pix" name="pagamento"></input>
                <label htmlFor="pix"> PIX</label>
            </div>
            <div className="flex flex-row m-2">
                <input type="radio" id="debito" name="pagamento"></input>
                <label htmlFor="debito"> Cartão de débito</label>
            </div>
        </div>

        <div>
            <h3>Resumo do pedido</h3>
        </div>

        <div>
            <input type="button" value="Finalizar Pedido" className="flex items-stretch md:items-center bg-white rounded-lg"></input>
        </div>
    </div>
}
export default Checkout