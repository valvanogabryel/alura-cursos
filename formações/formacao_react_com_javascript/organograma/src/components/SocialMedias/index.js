import './SocialMedias.css';

const SocialMedias = () => {
    return (
        <div className='medias__container'>
            <a href="https://pt-br.facebook.com/" target="_blank" rel='noreferrer'><img src="/imagens/fb.png" alt="Logo facebook" /></a>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" target="_blank" rel='noreferrer'><img src="/imagens/tw.png" alt="Logo twitter" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'><img src="/imagens/ig.png" alt="Logo instagram" /></a>
        </div>
    )
}

export default SocialMedias;