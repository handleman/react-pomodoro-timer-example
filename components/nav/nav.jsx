import styles from './nav.module.scss';
import Link from 'next/link';

export function Nav(props) {

    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/"><a>timer</a></Link></li>
                <li><Link href="/config"><a>config</a></Link></li>
            </ul>
        </nav>
    )
}