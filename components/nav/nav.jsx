<<<<<<< HEAD
export function Nav(props) {
    return (
        <div>navigation panel</div>
=======
import styles from './nav.module.scss';

export function Nav(props) {

    return (
        <nav className={styles.nav}>
            <ul>
                <li><a>timer</a></li>
                <li><a>config</a></li>
            </ul>
        </nav>
>>>>>>> 1400a2b41f88899436f3685cd9f496a6f16cdac3
    )
}