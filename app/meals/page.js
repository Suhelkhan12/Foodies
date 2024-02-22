import { Suspense } from 'react'
import Link from 'next/link'
import classes from './page.module.css'
import { getMeals } from '@/lib/meals'
import Meals from '@/componets/meals/Meals-grid'

export const metadata = {
  title: 'All meals',
  description: 'Browse the delicious meals shared by our community.'
}

async function MealsComponent(){
  // this is how we will fetch meals using db
  const meals = await getMeals();
  return <Meals meals={meals}/>
}

const page = async () => {

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
        <Suspense fallback={<p className={classes.loading}>Fetching meals</p>}>
        <MealsComponent/>
        </Suspense>
      </main>
    </>
  ) 
}

export default page