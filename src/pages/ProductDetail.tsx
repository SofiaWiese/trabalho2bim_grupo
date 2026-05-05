import React, { useState } from "react";

const ProductDetail = () => {
  const [tamanho, setTamanho] = useState(37);
  const [quantidade, setQuantidade] = useState(1);

  const [nome, setNome] = useState("Tênis Pica");
  const [preco, setPreco] = useState("689,00");
  const [descricao, setDescricao] = useState(
    "Com a facilidade do calçar e a autenticidade HS, o Sneaker Calle Cinza é mais do que um simples calçado; ele é uma expressão das ruas latinas, trazendo praticidade e muita personalidade para os seus pés."
  );

  const imagens = [
    "https://flavios.vtexassets.com/arquivos/ids/226744-1600-1600?v=638312696032030000&width=1600&height=1600&aspect=true",
    "https://flavios.vtexassets.com/arquivos/ids/226745-1600-1600?v=638312696152270000&width=1600&height=1600&aspect=true",
    "https://flavios.vtexassets.com/arquivos/ids/226746-1600-1600?v=638312696233870000&width=1600&height=1600&aspect=true",
  ];

  const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);

  const tamanhos = [37, 38, 39, 40, 41, 42, 43, 44];

  
  const avaliacao = 4;

  const renderStars = (nota) => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <span key={i}>
          {i <= nota ? "★" : "☆"}
        </span>
      );
    }
    return estrelas;
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8">

      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-black">
        Sapoato
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 text-black w-full max-w-6xl">

        <div className="flex flex-col gap-4 w-full md:w-auto">

          <img
            className="w-full max-w-[400px] md:max-w-[500px] mx-auto"
            src={imagemPrincipal}
            alt="img tenis"
          />

          <div className="flex gap-2 md:gap-4 justify-center">
            {imagens.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setImagemPrincipal(img)}
                className={`w-20 md:w-24 cursor-pointer border ${
                  imagemPrincipal === img
                    ? "border-black"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

        </div>

        <div className="flex flex-col gap-4 w-full md:w-[350px]">

          <h2 className="text-xl md:text-2xl font-bold">
            {nome}
          </h2>

         
          <div className="flex items-center gap-2 text-yellow-500 text-sm">
            {renderStars(avaliacao)}
            <span className="text-gray-500">(69 avaliações)</span>
          </div>

          <h2 className="text-lg md:text-xl">
            R${preco}
          </h2>

          <p className="text-green-500 text-sm md:text-base">
            Frete grátis
          </p>

          <h2 className="mt-2 md:mt-4">
            Tamanho: <span className="font-bold">{tamanho}</span>
          </h2>

          <div className="flex gap-2 flex-wrap">
            {tamanhos.map((t) => (
              <button
                key={t}
                onClick={() => setTamanho(t)}
                className={`px-3 py-1 border rounded text-sm md:text-base ${
                  tamanho === t ? "bg-black text-white" : "bg-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between md:justify-start gap-4 mt-4">

            <div className="flex items-center gap-4 border px-4 py-2 rounded">
              <button
                onClick={() =>
                  setQuantidade(quantidade > 1 ? quantidade - 1 : 1)
                }
              >
                -
              </button>

              <span>{quantidade}</span>

              <button onClick={() => setQuantidade(quantidade + 1)}>
                +
              </button>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-full md:w-auto">
              Comprar
            </button>

          </div>
        </div>
      </div>

      <div className="mt-8 max-w-[900px] text-black">
        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
          Descrição do Sapato
        </h2>

        <p className="leading-7 md:leading-9 text-sm md:text-lg">
          {descricao}
        </p>
      </div>

    </div>
  );
};

export default ProductDetail;