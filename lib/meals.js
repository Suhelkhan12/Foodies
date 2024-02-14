import sql from 'better-sqlite3'
const db = sql('meals.db')

export async function getMeals(){
    // this is just to add a loading state
    await new Promise((resolve)=> setTimeout(resolve,2000))
   return db.prepare('SELECT * FROM meals').all();
}