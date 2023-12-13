function modifyContent(){

const keyBuild = document.querySelector(".key-locker");
const dayCalendar = "";
const keyArray = ["keyZero", "key1", "key2"];
const keyGen = "";
const keyZero = "Lock up keys!";
// const keyClaim = "";
const keyDiscount = "";

const claimForm = "";
const returnClaimForm = "";

keyBuild.innerHTML = `
  <div class="wrapper">
    <div class="claim-form">Yay I work!</div>
  </div>
  
`

function keyClaim(keyArray){
  if(!keyZero){
    const keyView = keyArray;
    console.log(keyView);
  } else {
    return keyZero;
  }
}

keyClaim();
}
window.addEventListener('DOMContentLoaded', modifyContent);
