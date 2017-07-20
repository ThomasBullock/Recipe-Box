export const recipes = (typeof localStorage["motsBox"] != "undefined") ? JSON.parse(localStorage["motsBox"]) : [
	{title: "Mutton or Nutton", ingredients: ["Sun Aged Mutton", "Red Chillies", "Tomato Puree", "Onion", "Garlic", "Mustard Seeds", "Fenugreek"], img: "http://indianhealthyrecipes.com/wp-content/uploads/2016/05/mutton-curry-recipe-11.jpg" },
	{title: "Lentil Gruel", ingredients: ["Red Lentils", "Water", "Coconut Milk", "Onion", "Cumin"], img: "https://static01.nyt.com/images/2014/02/21/dining/recipes-redlentilsoup/recipes-redlentilsoup-superJumbo.jpg"}
]; 