const grocery_list = [
    {
        id: 1,
        name: 'Pizza Rolls',
        brand: 'Totinos',
        price: 5.99,
        tasty: true
    },
    
    {
        id: 2,
        name: 'Milk',
        brand: 'Lucerne',
        price: 2.99,
        tasty: true
    },
    {
        id: 3,
        name: 'Eggs',
        brand: 'Kroger',
        price: 1.89,
        tasty: true
    },
    {
        id: 4,
        name: 'Bread',
        brand: 'Kroger',
        price: 2.00,
        tasty: true
    }
]

// console.log(grocery_list)

// add to shopping list function with dateCreated property whose value is current date and time

const butter = {
    name: 'Butter',
    brand: 'Sams Club',
    price: 4.00,
    tasty: true
}
const cereal = {
    name: 'Cinnamon Toast Crunch',
    brand: 'General Mills',
    price: 6.99,
    tasty: true
}
const toilet_paper = {
    name: 'Toilet Paper',
    brand: 'Charmin',
    price: 12.00,
    tasty: false
}
const paper_towels = {
    name: 'Paper Towels',
    brand: 'Sams Club',
    price: 15.99,
    tasty: false
}
const tortillas = {
    name: 'Flour Tortilla',
    brand: 'Mission',
    price: 9.99,
    tasty: true
}

const addGrocery = (groceryObject) => {
    // counts the number of flowers currently in the array then adds +1 to that value and assigns it to the new flower object
   const lastindex = grocery_list.length - 1
   const currentItem = grocery_list[lastindex]
   const maxId = currentItem.id 
   const newGroceryID = maxId + 1

   groceryObject.id = newGroceryID

   groceryObject.date = Date()


    grocery_list.push(groceryObject)
}

addGrocery(butter)
addGrocery(cereal)
addGrocery(toilet_paper)
addGrocery(paper_towels)
addGrocery(tortillas)



// console.log(grocery_list)

for (const value of grocery_list) {
    if (value.price > 8) {
        console.log(value)
    }
}