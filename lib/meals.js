import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

export async function getMeals(){
    // this is just to add a loading state
    await new Promise((resolve)=> setTimeout(resolve,2000));
    // throw new Error('Something went wrong')
   return db.prepare('SELECT * FROM meals').all();
}

export function getSingleMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal){
     meal.slug = slugify(meal.title,{lower:true});
     meal.instructions = xss(meal.instructions)
}