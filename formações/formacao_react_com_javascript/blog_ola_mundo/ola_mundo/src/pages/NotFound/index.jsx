import React, { Fragment } from 'react';

import MainButton from 'components/MainButton';

import error404 from 'assets/erro_404.png';

import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>Ops! Página não encontrada...</h1>
                <p className={styles.paragraph}>Tem certeza de que era isso que você estava procurando?
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                <div
                    className={styles.buttonContainer}
                    onClick={() =>
                        navigate(-1 || '/') //quando "-1" é passado como parâmetro para a function useNavigate(), ele retorna à última página aberta. Quando somente '/' é passado como parâmetro, ele retorna à homepage. 
                    }>
                    <MainButton size='lg'>
                        Voltar
                    </MainButton>
                </div>
                <img
                    className={styles.dogImage}
                    src={error404}
                    alt="Cachorro de óculos vestido como humano"
                />
            </div>
            <div className={styles.whiteSpace}>

            </div>
        </Fragment >
    );
}

export default NotFound;

