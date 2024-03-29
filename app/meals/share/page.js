'use client'
import { useFormState } from 'react-dom'
import ImagePicker from '@/componets/image-picker/ImagePicker';
import SubmitButton from '@/componets/formButton/SubmitButton';
import { shareMeal } from '@/actions/actions';
import classes from './page.module.css';

export default function ShareMealPage() {
  const [state , formAction] = useFormState(shareMeal, {message: null});

  return (
    <>
      <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </div>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Add your meal image" name="image"/>
           {
            state !== undefined && state.message && <p style={{color:'red'}}>Invalid inputs</p>
           }
          <p className={classes.actions}>
            <SubmitButton/>
          </p>
        </form>
      </main>
      </div>
    </>
  );
}