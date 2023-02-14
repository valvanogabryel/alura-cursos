import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

const Menu = () => {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo title='Logo da aluroni' />
            </nav>
        </main>
    );
}

export default Menu;