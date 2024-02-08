'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/assets/logo.png'
import classes from './header.module.css'

const Header = () => {
  const path = usePathname();
  return (
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <Image src={Logo} alt='meals logo for the navbar' priority/>
            Foodies
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals" className={
                        path.startsWith('/meals') ? classes.active : undefined 
                    }>Browse meals</Link>
                </li>
                <li>
                    <Link href="/community" className={
                        path.startsWith('/community') ? classes.active : undefined 
                    }>Community</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header