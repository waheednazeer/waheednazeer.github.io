



console.log(localStorage.getItem("item1"));

function buy(item) {
   let cart= localStorage.getItem("item1");
   console.log(typeof(cart));
   if (cart === null) {
    cart=[];
   }
   cart.push(item);
   localStorage.setItem("item1", cart);
   console.log(localStorage.getItem("item1"));
    //localStorage.setItem("item1", item1+price);
}

document.getElementById("buy").innerHTML=localStorage.getItem("item1");



