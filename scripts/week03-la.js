
//Form properties and methods
let form = document.forms.my; // <form name="my"> element

// get the element
let elem = form.elements.one; // <input name="one"> element
console.log(elem.value);

let form2 = document.forms[0];
let ageElems = form.elements.age;
console.log(ageElems[0]); // same elements can be called with array index start from first element.
console.log(ageElems[1]);
//alert(ageElems[1]);
const textarea= document.querySelector('[name="my"]');

function getText()
{
    console.log(form2.elements.textarea.value)
}
textarea.addEventListener("focus", getText());

/**const select=document.querySelector("#select");
let selected = Array.from(select.options)
.filter(option => option.selected)
.map(option => option.value);**/


//const qty= document.querySelector("#qty");
qty.addEventListener("click", function(event) {
  let a=event.currentTarget.value;
  localStorage.setItem("key",a)
  if (a==null) {
    a=1;
    
  }
    console.log(localStorage.getItem("key"));
});


const wes=document.querySelector(".wes");

wes.addEventListener("click", function(event) {
    
    console.log("You clicked it");
    event.preventDefault();
    const shouldChangePage = confirm(
        "This website might be malicious! Do you wish to proceed?"
      );
      if (shouldChangePage) {
        window.location = event.currentTarget.href;
      }
      console.log(window.location);
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener("submit", function(event) {
    const name = event.currentTarget.email.value;
        if (name.includes("waheed")) {
            alert("Sorry bro");
            event.preventDefault();
  }

    console.log(event);
    console.dir(event.currentTarget.name);
    console.dir(event.currentTarget.email);
    event.preventDefault();
  });

  function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
  }
  signupForm.name.addEventListener("keyup", logEvent);
  //signupForm.name.addEventListener("keydown", logEvent);
  //signupForm.name.addEventListener("focus", logEvent); //when click in input, event trigger
 // signupForm.name.addEventListener("blur", logEvent); // when go out of the input, event trigger