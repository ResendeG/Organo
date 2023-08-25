import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div>
                 <a href='https://github.com/ResendeG'>
                    <img src='/imagens/fb.png' alt='Icon Facebook'/>
                </a>
                <a href='https://github.com/ResendeG'>
                    <img src='/imagens/tw.png' alt='Icon Twitter'/>
                </a>
                <a href='https://github.com/ResendeG'>
                    <img src='/imagens/ig.png' alt='Icon Instagram'/>
                </a>  
            </div>
            <img className='icon-organo' src='/imagens/logo.png' alt='Logo Organo'/>
            <p>Desenvolvido por Alura.</p>
        </section>
    )
}

export default Footer;