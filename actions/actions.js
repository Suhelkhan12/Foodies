'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "@/lib/meals";

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
  
      await saveMeal(meal);
      redirect('/meals');
    }catch(err){
      console.log(err)
    }
  }