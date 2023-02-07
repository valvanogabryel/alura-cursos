import './Banner.css';

interface BannerProps {
    imagePath: string,
    alternativeText?: string
}

const Banner = ({ imagePath, alternativeText }: BannerProps) => {

    return (
        <header className="banner">
            <img
                src={imagePath}
                alt={alternativeText}
            />
        </header>
    )
}

export default Banner;