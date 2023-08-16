import "./Header.modules.scss";

interface HeaderProps {
  title: string;
  description: string;
  className: string;
  image: string;
}

export function Header({
  title,
  description,
  className = "",
  image,
}: HeaderProps) {
  return (
    <header className={`header ${className}`}>
      <div className="header-texto">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div className="header-imagem">
        <img src={image} alt={`Imagem de ${title}`} />
      </div>
    </header>
  );
}
