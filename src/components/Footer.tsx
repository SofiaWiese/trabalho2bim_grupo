export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Grid Principal */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Sobre nós */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Sobre nós</h3>
                        <p className="text-sm leading-relaxed">
                            Somos a loja com a entrega mais rápida do Brasil, 
                            oferecendo uma ampla variedade de calçados para 
                            todas as idades e estilos. Nossa missão é proporcionar 
                            conforto e estilo aos nossos clientes, garantindo uma 
                            experiência de compra excepcional.
                        </p>
                    </div>

                    {/*  */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Razão Social</h3>
                        <ul className="space-y-2 text-sm">
                            <p>Sapoato Comércio de Calçados Ltda.</p>
                        </ul>
                    </div>

                    {/* Políticas */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Políticas</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                            <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-white transition">Devoluções</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
                        <ul className="space-y-2 text-sm">
                            <li>CNPJ: 12.345.678/0001-22</li>
                            <li>Telefone: (44) 1234-5678</li>
                            <li>Endereço: Ivatuba, Paraná</li>
                        </ul>
                    </div>
                </div>

                {/* Linha Divisória */}
                <div className="border-t border-gray-700 pt-8 mt-8">
                    {/* Redes Sociais */}
                    <div className="flex justify-center gap-6 mb-6">
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            <span className="text-xl">📘</span>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            <span className="text-xl">𝕏</span>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            <span className="text-xl">📷</span>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            <span className="text-xl">▶️</span>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-sm text-gray-400">
                        <p>&copy; Sapoato todos os direitos reservados @2026.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}