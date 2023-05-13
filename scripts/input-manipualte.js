
let key=["a", "b", "c"];
let data= [1,2,3];

// retrieve data from localstorage
function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  // save data to local storage
  function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  setLocalStorage("key",data);

  let keyId=getLocalStorage("key");
  //const price = keyId.map((item) => (item));
  console.log(keyId[0]);