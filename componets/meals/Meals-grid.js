import classes from './mealsgrid.module.css'
import MealItem from './MealItem'

const Meals = ({meals}) => {
  return (
    <ul className={classes.meals}>
        {
            meals.map((meal)=> <li key={meal.id}>
                <MealItem {...meal}/>
            </li>)
        }
    </ul>
  )
}

export default Meals