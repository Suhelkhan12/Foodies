import Link from 'next/link'
import classes from './page.module.css'
import { getMeals } from '@/lib/meals'
import Meals from '@/componets/meals/Meals-grid'

const page = async () => {
  // this is how we will fetch meals using db
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals created <span className={classes.highlight}>by you</span></h1>
        <p>Choose your favourite recipe and cook it yourself because cooking is fun.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Meals meals={meals}/>
      </main>
    </>
  )
}

export default page