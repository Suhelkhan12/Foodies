import Link from 'next/link'
import ImageSlideshow from '@/componets/images/ImageSlideshow';
import classes from './page.module.css'

export default function Home() {
  return (
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
      <ImageSlideshow/>
      </div>
      <div>
        <div className={classes.hero}>
          <h1>
            A place for next level Foodies.
          </h1>
          <p>
            Grab the expericnce of different food taste from all over the world and share your experience.
          </p>
        </div>
        <div className={classes.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore Foods</Link>

        </div>
      </div>
    </header>
    <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Foodies is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
          Foodies is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
          Foodies is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
          Foodies is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
