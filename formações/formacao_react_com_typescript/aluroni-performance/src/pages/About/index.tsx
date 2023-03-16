import styles from './About.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import house from 'assets/about/casa.png';
import pasta1 from 'assets/about/massa1.png';
import pasta2 from 'assets/about/massa2.png';

const images = [
    pasta1,
    pasta2
];

const About = () => {
    return (
        <section>
            <h3 className={themeStyles.title}>Sobre</h3>
            <div className={styles.aboutUs}>
                <img src={house} alt="Casa Aluroni" />
                <div className={styles.aboutUs__text}>
                    <p>
                        Nós do <span className={styles.aboutUs__text__highlight} style={{
                            fontFamily: 'Italiana',
                            color: '#d73b3b'
                        }}>ALURONI&trade;</span> oferecemos a vocês, nossos queridos clientes, a <span className={styles.aboutUs__text__highlight}>Massa Italiana Caseira</span> mais <span className={styles.aboutUs__text__highlight}>saborosa</span> e <span className={styles.aboutUs__text__highlight}>sofisticada</span> de São Paulo! Prezamos pelos <span className={styles.aboutUs__text__highlight}>ingredientes tradicionais da culinária Italiana</span>, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                    </p>
                    <p>
                        Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                    </p>
                    <p>
                        Para acompanhar as massas italianas, <span className={styles.aboutUs__text__highlight} style={{
                            fontFamily: 'Italiana',
                            color: '#d73b3b'
                        }}>ALURONI&trade;</span> possui uma reserva de vinhos especiais, que <span className={styles.aboutUs__text__highlight}>harmonizam perfeitamente</span> com o seu prato, seja carne ou massa!
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {
                    images.map((image, index) => (
                        <div key={index} className={styles.images__image}>
                            <img src={image} alt="imagem de massa" />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default About;