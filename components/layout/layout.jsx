import { Nav } from '../nav'
import styles from './layout.module.scss'

export function Layout(props) {
    const { children } = props;
    return (
        <>
            <Nav></Nav>
            <main className={styles.main}>{children}</main>
        </>
    )
}