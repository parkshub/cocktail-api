//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

document.querySelector('button').addEventListener('click', cocktailTimeBaby)

function cocktailTimeBaby() {
    let cocktail = document.querySelector('input').value.toLowerCase()
    let cocktailEdit = cocktail.split(' ').join('%20')
    let url = link + cocktailEdit

    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
        })
}