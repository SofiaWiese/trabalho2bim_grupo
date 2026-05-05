import React, { useState } from "react";

const ProductDetail = () => {
  const [tamanho, setTamanho] = useState(37);
  const [quantidade, setQuantidade] = useState(1);

  const [nome, setNome] = useState("Tênis pica");
  const [preco, setPreco] = useState("689,00");
  const [descricao, setDescricao] = useState(
    "Com a facilidade do calçar e a autenticidade HS, o Sneaker Calle Cinza é mais do que um simples calçado; ele é uma expressão das ruas latinas, trazendo praticidade e muita personalidade para os seus pés. Feito em Knit leve e respirável, este modelo apresenta um solado caixa alta que proporciona conforto e estilo."
  );

  const imagens = [
    "https://flavios.vtexassets.com/arquivos/ids/226744-1600-1600?v=638312696032030000&width=1600&height=1600&aspect=true",
    "https://flavios.vtexassets.com/arquivos/ids/226745-1600-1600?v=638312696152270000&width=1600&height=1600&aspect=true",
    "https://flavios.vtexassets.com/arquivos/ids/226746-1600-1600?v=638312696233870000&width=1600&height=1600&aspect=true",
  ];

  const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);

  const tamanhos = [37, 38, 39, 40, 41, 42, 43, 44];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        {nome}
      </h1>

      <div className="flex items-start justify-center gap-16">

        <div className="flex flex-col gap-4">

          <img
            className="w-[500px]"
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

          <div className="mt-8 max-w-[700px]">
            <h2 className="text-3xl font-bold mb-4">
              Descrição do Sapato
            </h2>

            <p className="text-black leading-9 text-lg">
              {descricao}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">

          <h2 className="text-2xl font-bold">
            {nome}
          </h2>

          <h2 className="text-black">
            R${preco}
          </h2>

          <p className="text-green-500">
            Frete grátis
          </p>

          <h2 className="mt-4">
            Tamanho: <span className="font-bold">{tamanho}</span>
          </h2>

          <div className="flex gap-2 my-3 flex-wrap">
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

          <div className="flex items-center gap-4 mt-6">

            <div className="flex items-center gap-4 border px-4 py-2 rounded">
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
    </div>
  );
};

export default ProductDetail;
