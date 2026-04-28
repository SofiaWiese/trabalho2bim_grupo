const Checkout =({...props})=>{
    return<div className="w-full h-full bg-green-200"{...props}>

        <h2 className="text-2xl font-bold text-center mt-6">Checkout</h2>


        <div className="flex flex-col m-1 items-stretch md:items-center bg-white rounded-lg m-40 p-10 ">
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <div className="flex flex-row m-2">
                <p>Nome: </p>
                <input type="text" placeholder="Digite aqui seu nome"></input>
            </div>
            <div className="flex flex-row m-2">
                <p>Sobrenome: </p>
                <input type="text" placeholder="Digite aqui seu sobrenome"></input>
            </div>
            <div className="flex flex-row m-2">
                <p>Telefone: </p>
                <input type="text" placeholder="Digite aqui seu telefone"></input>
            </div>
            <div className="flex flex-row m-2">
                <p>CEP: </p>
                <input type="text" placeholder="Digite aqui seu CEP"></input>
            </div>
            <div className="flex flex-row m-2">
                <p>Número da casa: </p>
                <input type="text" placeholder="Digite aqui o número da sua casa"></input>
            </div>
        </div>

        <div className="flex flex-col w-full max-w-xl bg-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Tipo de entrega</h3>
            <div className="flex flex-row m-2">
                <input type="radio" id="padrao"></input>
                <label htmlFor="padrao"> Entega padrão (R$0,00)</label>
            </div>
            <div className="flex flex-row m-2">
                <input type="radio" id="rapida"></input>
                <label htmlFor="rapida">Entega rápida (R$10,00)</label>
            </div>
            <div className="flex flex-row m-2">
                <input type="radio" id="super_rapida"></input>
                <label htmlFor="super_rapida">Entrega super-rápida (R$25,00)</label>
            </div>
        </div>

        <div className="flex flex-col items-stretch md:items-center bg-white rounded-lg m-20 p-10">
            <h3 className="text-lg font-semibold mb-4">Forma de pagamento</h3>
            <div className="flex flex-row m-2">
                <input type="radio" id="credito"></input>
                <label htmlFor="credito"> Cartão de crédito</label>
            </div>
            <div className="flex flex-row m-2">
                <input type="radio" id="pix"></input>
                <label htmlFor="pix"> PIX</label>
            </div>
            <div className="flex flex-row m-2">
                <input type="radio" id="debito"></input>
                <label htmlFor="debito"> Cartão de débito</label>
            </div>
        </div>

        <div>
            <h3>Resumo do pedido</h3>
        </div>

        <div>
            <input type="button" value="Finalizar Pedido"></input>
        </div>
    </div>
}
export default Checkout