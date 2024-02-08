import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo.png'
import classes from './header.module.css'
import Navlink from '../navlink/Navlink'

const Header = () => {
  return (
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <Image src={Logo} alt='meals logo for the navbar' priority/>
            Foodies
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Navlink href="/meals">Meals</Navlink>
                </li>
                <li>
                   <Navlink href="/community">Community</Navlink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header