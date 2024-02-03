import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="rodape">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src="/imagens/fb.png" alt="icone do Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/" target="_blank">
                            <img src="/imagens/ig.png"alt="icone do Instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank">
                            <img src="/imagens/tw.png"alt="icone do Twitter"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png"/>
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>

    )
}

export default Rodape