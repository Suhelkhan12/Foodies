import classes from './mealsgrid.module.css'

const Meals = ({meals}) => {
  return (
    <ul className={classes.meals}>
        {
            meals.meals((meal)=> <li key={meal.id}></li>)
        }
    </ul>
  )
}

export default Meals