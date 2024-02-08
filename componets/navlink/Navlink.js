'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './navlink.module.css'

const Navlink = ({href , children}) => {
    const path = usePathname();

  return (
    <Link href={href} className={
        path.startsWith(href) ? classes.active : undefined 
    }>{children}</Link>
  )
}

export default Navlink