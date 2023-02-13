import Button from '../../components/Button';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <main>
            <nav className={styles.menu}>
                <Button />
            </nav>
        </main>
    );
}

export default Menu;