import { Meal } from "./meals";

export interface Day {
    day: string,
    meals: {
        lunch?: Meal
        dinner?: Meal
    }
}

export function shuffle(arrayInput: any[]) {
    const array = [...arrayInput]
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export function buildMenu(meals: Meal[]) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let menu: Day[] = [];

    const lunches = meals.filter(meal => meal.meal === 'lunch')
    const dinners = meals.filter(meal => meal.meal === 'dinner')

    days.forEach((day, index) => {
        let dayMenu: Day = {
            day: day,
            meals: {
                lunch: lunches[index],
                dinner: dinners[index],
            }
        };
        menu.push(dayMenu)
    })
    return menu
}