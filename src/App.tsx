import { useEffect, useState } from "react";
import Button from "./Button";
import Day from "./Day";
import { useLocalStorage } from "./hooks";
import { meals } from "./meals";
import { buildMenu, shuffle } from "./utils";

function App() {
  const [shuffledMeals, setShuffledMeals] = useLocalStorage(
    "meals",
    JSON.stringify(shuffle(meals))
  );

  const [days, setDays] = useState(buildMenu(meals));

  const shuffleMeals = () => {
    setShuffledMeals(shuffle(meals));
  };

  useEffect(() => {
    setDays(buildMenu(shuffledMeals));
  }, [shuffledMeals]);

  return (
    <div className="flex items-center content-center min-h-screen bg-teal-700">
      <div>
        <button type="button" onClick={shuffleMeals}>
          Shuffle
        </button>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
        {days.map((day) => (
          <Day day={day.day} meals={day.meals} />
        ))}
      </div>
    </div>
  );
}

export default App;
