import './banner.css';

const Banner = (props) => (
    <header className="banner__container">
        <img className="banner__image" src={props.src} alt={props.alt}></img>
    </header>
)

export default Banner;