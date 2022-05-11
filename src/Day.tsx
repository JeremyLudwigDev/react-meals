import Button from "./Button";
import { Meal } from "./meals";

interface DayProps {
  day: string;
  meals: {
    lunch?: Meal;
    dinner?: Meal;
  };
}
interface MenuProps {
  mealTime: string;
  meal?: Meal;
}
function Menu({ mealTime, meal }: MenuProps) {
  return (
    <li className="mb-6">
      <span className="text-gray-500 uppercase mr-2 text-xs font-light block">
        {mealTime}
      </span>
      <h3 className="font-serif text-lg my-1">{meal?.name}</h3>
      <div>
        <Button small subdued>
          <a href={meal?.recipe.href}>Recipe</a>
        </Button>
        {meal?.vegan && (
          <span className="cursor-default" title="Vegan">
            <small className="bg-green-200 py-1 px-2 ml-2 text-xs rounded-full text-gray-600">
              v
            </small>
          </span>
        )}
      </div>
    </li>
  );
}

export default function Day({ day, meals }: DayProps) {
  const { lunch, dinner } = meals;

  return (
    <div className="border p-4 rounded-md bg-white drop-shadow-md">
      <h2 className="uppercase text-sm font-bold border-b mb-3 pb-2">{day}</h2>
      <ul>
        <Menu mealTime="Lunch" meal={lunch} />
        <Menu mealTime="Dinner" meal={dinner} />
      </ul>
    </div>
  );
}
