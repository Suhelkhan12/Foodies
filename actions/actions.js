'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "@/lib/meals";

function isInvalidText(text){
  return !text || text.trim() === ''
}

// this is basically SERVER ACTION for form submission
 export async function shareMeal(formData){
    try{
      const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions:formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')     
      }

      if(isInvalidText(meal.title) || isInvalidText(meal.summary)|| isInvalidText(meal.instructions)|| isInvalidText(meal.creator)|| isInvalidText(meal.creator_email) || !meal.creator_email.includes('@')|| !meal.image || meal.image.size === 0){
      throw  new Error('Invalid')
      }
  
      await saveMeal(meal);
      redirect('/meals');
    }catch(err){
      console.log(err)
    }
  }