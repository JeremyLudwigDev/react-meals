export interface Meal {
    name: string
    meal: 'lunch' | 'dinner'
    vegan: boolean
    recipe: URL
}

export const meals: Meal[] = [
    {name: 'Food Lunch', meal: 'lunch', vegan: false, recipe: new URL('http://example.com')},
    {name: 'More Food Lunch', meal: 'lunch', vegan: false, recipe: new URL('http://example.com')},
    {name: 'Vegan Lunch Food', meal: 'lunch', vegan: true, recipe: new URL('http://example.com')},
    {name: 'Some Lunch Food', meal: 'lunch', vegan: false, recipe: new URL('http://example.com')},
    {name: 'Some Vegan Lunch Food', meal: 'lunch', vegan: true, recipe: new URL('http://example.com')},
    {name: 'Delicious Lunch Food', meal: 'lunch', vegan: false, recipe: new URL('http://example.com')},
    {name: 'Scrumptous Lunch Food', meal: 'lunch', vegan: false, recipe: new URL('http://example.com')},
    {name: 'Bland Food Dinner', meal: 'dinner', vegan: false, recipe: new URL('http://example.com')},
    {name: 'Interesting Dinner Food', meal: 'dinner', vegan: false, recipe: new URL('http://example.com')},
    {name: 'Yet More Dinner Food', meal: 'dinner', vegan: false, recipe: new URL('http://example.com')},
    {name: 'Better Vegan Food Dinner', meal: 'dinner', vegan: true, recipe: new URL('http://example.com')},
    {name: 'Very Bad Food Dinner', meal: 'dinner', vegan: false, recipe: new URL('http://example.com')},
    {name: 'Greasy Food Dinner', meal: 'dinner', vegan: false, recipe: new URL('http://example.com')},
    {name: 'Meagre Food Dinner', meal: 'dinner', vegan: false, recipe: new URL('http://example.com')},
]