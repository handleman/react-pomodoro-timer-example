import styles from './nav.module.scss';

export function Nav(props) {

    return (
        <nav className={styles.nav}>
            <ul>
                <li><a>timer</a></li>
                <li><a>config</a></li>
            </ul>
        </nav>
    )
}