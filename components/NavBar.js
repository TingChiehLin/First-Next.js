import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navigationContainer}>
            <div className="logo">
                <Link href="/">
                    <Image src="/logo.png" width={'250px'} height={'60px'}/>
                </Link>
            </div>
            <div className={styles.navigationLink}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/fetch">Fetch Data</Link>
            </div>
        </nav>
    );
}

export default NavBar;