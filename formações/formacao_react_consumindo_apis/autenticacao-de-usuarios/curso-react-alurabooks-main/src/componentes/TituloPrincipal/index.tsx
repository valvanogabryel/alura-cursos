import './TituloPrincipal.css';

const TituloPrincipal = ({ children }: React.PropsWithChildren) => {
  return (
    <h1 className="titulo--principal">{children}</h1>
  );
}

export default TituloPrincipal;