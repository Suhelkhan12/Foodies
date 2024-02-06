import Link from 'next/link'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <p>Made with {" "}
            <span>❤️</span>{" "}
            by{" "}
            <Link href="https://github.com/Suhelkhan12" target='blank' className={classes.github}>Suhel</Link>
        </p>
    </footer>
  )
}

export default Footer