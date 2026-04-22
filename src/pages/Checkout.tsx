const Checkout =({...props})=>{
    return<div {...props}>
        <h2>Checkout</h2>
        <div>
            <h3>Endereço</h3>
            <p>Nome: </p>
            <input type="text" placeholder="Digite aqui seu nome"></input>
            <p>Sobrenome: </p>
            <input type="text" placeholder="Digite aqui seu sobrenome"></input>
            <p>Telefone: </p>
            <input type="text" placeholder="Digite aqui seu telefone"></input>
            <p>CEP: </p>
            <input type="text" placeholder="Digite aqui seu CEP"></input>
            <p>Número da casa: </p>
            <input type="text" placeholder="Digite aqui o número da sua casa"></input>
        </div>

        <div>
            <h3>Tipo de entrega</h3>
            <input type="checkbox" id="padrao"></input>
            <label htmlFor="padrao"> Entega padrão (R$0,00)</label>
            <input type="checkbox" id="rapida"></input>
            <label htmlFor="rapida">Entega rápida (R$10,00)</label>
            <input type="checkbox" id="super_rapida"></input>
            <label htmlFor="super_rapida">Entrega super-rápida (R$25,00)</label>
        </div>

        <div>
            <h3>Forma de pagamento</h3>
            <input type="checkbox" id="credito"></input>
            <label htmlFor="credito"> Cartão de crédito</label>
            <input type="checkbox" id="pix"></input>
            <label htmlFor="pix"> PIX</label>
            <input type="checkbox" id="debito"></input>
            <label htmlFor="debito"> Cartão de débito</label>
        </div>
    </div>
}
export default Checkout