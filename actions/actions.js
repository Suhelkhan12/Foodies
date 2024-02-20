'use server';

// this is basically SERVER ACTION for form submission
 export async function shareMeal(formData){
    try{
      const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions:formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        email: formData.get('email')     
      }
  
      console.log(meal)
    }catch(err){
      console.log(err)
    }
  }