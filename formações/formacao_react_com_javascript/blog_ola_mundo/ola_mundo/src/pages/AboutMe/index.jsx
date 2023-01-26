import React from 'react'

import PostModel from 'components/PostModel';

import coverPhoto from 'assets/sobre_mim_capa.png';
import aboutMePhoto from 'assets/sobre_mim_foto.jpg';

import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <PostModel title='Sobre mim' coverPhoto={coverPhoto}>
            <h3 className={styles.subtitle}>Olá, eu sou o Gabryel.</h3>
            <img src={aboutMePhoto} alt="Foto de Gabryel" className={styles.aboutMePhoto} />
            <p className={styles.paragraph}>
                Oi, tudo bem? Eu sou um estudante de desenvolvimento web.
            </p>

            <p className={styles.paragraph}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sed ipsa laborum saepe assumenda nesciunt labore quibusdam iste explicabo quo repellat error non est aliquam obcaecati, consequuntur ea vero voluptatum iusto aut vitae repellendus quae! Minus maxime debitis libero impedit.
            </p>

            <p className={styles.paragraph}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti rem iusto quaerat dolorem maiores atque ad, pariatur aspernatur sint consectetur vero eligendi quos repudiandae. Ducimus accusantium cupiditate beatae nihil reiciendis?40
            </p>

            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil quasi dolorum harum ullam magnam nostrum quisquam unde est aliquam tempora ex fuga eveniet quidem, voluptate reprehenderit aspernatur doloribus impedit.
            </p>

            <p className={styles.paragraph}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum quisquam illum rerum quae tempore, animi iusto amet consectetur nostrum perferendis voluptate natus aperiam assumenda impedit? Voluptate doloremque quidem voluptatem.
            </p>

            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores reiciendis possimus quia saepe debitis aspernatur, ex ratione assumenda autem earum dolores, rerum temporibus repellat ad repudiandae, qui corporis architecto nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere vero modi deleniti ullam esse exercitationem doloremque ea inventore quasi quisquam atque, rem aut laboriosam assumenda error, voluptate quia et?
            </p>
        </PostModel>
    );
}

export default AboutMe;