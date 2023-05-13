//const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url = "https://pokeapi.co/api/v2/pokemon";
let fetchedData = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
let abc=[1, 2, 3, 4, 5];
function doStuff(data) {
    fetchedData = data;
    console.log('first: ', fetchedData.count);
    const h2 = document.createElement('h2');
    h2.textContent= "Count: "+fetchedData.count;
    document.querySelector('main').appendChild(h2);
    fetchedData.results.forEach(pokeman => {
        console.log(pokeman.name);
        const div = document.createElement('div');
        div.textContent= pokeman.name;
        document.querySelector('main').appendChild(div);
    });
    console.log("inside function: ", fetchedData);
  }
getPokemon(url);
console.log("second: ", fetchedData);