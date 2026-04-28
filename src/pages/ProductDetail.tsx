import React, { useState } from "react";

const ProductDetail = () => {
  const [tamanho, setTamanho] = useState(37);
  const [quantidade, setQuantidade] = useState(1);
  const nomeTenis = "Tênis pica";
const precoTenis = 689.0;
  
  const imagens = [
    "https://flavios.vtexassets.com/arquivos/ids/226744-1600-1600?v=638312696032030000&width=1600&height=1600&aspect=true",
    "https://flavios.vtexassets.com/arquivos/ids/226745-1600-1600?v=638312696152270000&width=1600&height=1600&aspect=true",
    "https://flavios.vtexassets.com/arquivos/ids/226746-1600-1600?v=638312696233870000&width=1600&height=1600&aspect=true",
  ];

  const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);

  const tamanhos = [37, 38, 39, 40, 41, 42, 43, 44];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Sapoato</h1>

      <div className="flex items-center gap-12">
        
      
        <div className="flex flex-col gap-4">
          <img
            className="w-135"
            src={imagemPrincipal}
            alt="img tenis"
          />

          <div className="flex gap-4">
            {imagens.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setImagemPrincipal(img)}
                className={`w-24 cursor-pointer border ${
                  imagemPrincipal === img
                    ? "border-black"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

       
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Tênis pica</h2>
          <h2 className="text-black">R$689,00</h2>
          <p className="text-green-500">Frete grátis</p>

          <h2 className="mt-4">
            Tamanho: <span className="font-bold">{tamanho}</span>
          </h2>

          <div className="flex gap-2 my-3">
            {tamanhos.map((t) => (
              <button
                key={t}
                onClick={() => setTamanho(t)}
                className={`px-3 py-1 border rounded 
                ${tamanho === t ? "bg-black text-white" : "bg-white"}`}
              >
                {t}
              </button>
            ))}
          </div>

          
          <div className="w-full flex justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-4 border px-4 py-2 rounded ">
              <button
                onClick={() =>
                  setQuantidade(quantidade > 1 ? quantidade - 1 : 1)
                }
                className="text-xl"
              >
                -
              </button>

              <span>{quantidade}</span>

              <button
                onClick={() => setQuantidade(quantidade + 1)}
                className="text-xl"
              >
                +
              </button>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
              Comprar
            </button>
          </div>
        </div>
      </div>

    
      <div className="w-1/2 mt-8">
        <h2 className="text-left">Descrição do Sapato</h2>
        <p className="text-left text-black">
          Com a facilidade do calçar e a autenticidade HS, o Sneaker Calle Cinza é mais do que um simples calçado;
          ele é uma expressão das ruas latinas, trazendo praticidade e muita personalidade para os seus pés.
          Feito em Knit leve e respirável, este modelo apresenta um solado caixa alta que proporciona conforto e estilo.
          Ideal para o dia a dia e momentos casuais.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;