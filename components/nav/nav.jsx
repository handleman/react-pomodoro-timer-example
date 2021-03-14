import styles from './nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router'

export function Nav() {
    const router = useRouter();
    const className = styles.current;
    const routes = [
        {
            uri: '/',
            label: 'Timer'
        },
        {
            uri: '/config',
            label: 'Config'
        }
    ];

    return (
        <nav className={styles.nav}>
            <ul>
                {
                    routes.map((route, index) => (
                        <li key={index} className={`${router.pathname === route.uri ? className : ''}`}>
                            <Link href={route.uri}><a>{route.label}</a></Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}