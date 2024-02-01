import Link from 'next/link'
import Logo from '@/assets/logo.png'
import classes from './header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <img src={Logo.src} alt='meals logo for the navbar'/>
            Foodies
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse meals</Link>
                </li>
                <li>
                    <Link href="/community">Community</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header