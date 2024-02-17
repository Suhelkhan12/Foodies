import Image from 'next/image'
import { getSingleMeal } from '@/lib/meals'
import {notFound } from 'next/navigation'
import classes from './page.module.css'

const page = ({params}) => {
   const meal =  getSingleMeal(params.mealSlug)
   
   // for handling state when no meal is found
   if(!meal){
     notFound()
    }
    
    const instructions = meal.instructions.replace(/\n/g, '<br>')

  return (
    <>
        <div className={classes.header}>
          <div className={classes.image}>
            <Image src={meal.image} fill alt={meal.title}/>
          </div>
          <div className={classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={classes.creator}>
              by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
            </p>
            <p className={classes.summary}>{meal.summary}</p>
          </div>
        </div>
        <main className={classes.instructions} dangerouslySetInnerHTML={{__html: instructions}}></main>
    </>
  )
}

export default page