import fs from 'node:fs';
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

export async function saveMeal(meal){
     meal.slug = slugify(meal.title,{lower:true});
     meal.instructions = xss(meal.instructions);

     // humne suhel.png ko split kr diya . k basis par and [suhel, png] me se last element pop kra liya vo extension hoga 
     const extension = meal.image.name.split('.').pop();
     const fileName = `${meal.slug}.${extension}`;
     const bufferedImage = await meal.image.arrayBuffer();
    const stream =  fs.createWriteStream(`public/images/${fileName}`);
    stream.write(Buffer.from(bufferedImage) ,(error)=>{
        if(error){
            throw new Error('Saving image failed.')
        }
    })

    meal.image = `/images/${fileName}`

    db.prepare(`
    INSERT INTO meals (title, summary,instructions,creator,creator_email,image,slug)
    VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug,
    )
    `).run(meal)
    
}