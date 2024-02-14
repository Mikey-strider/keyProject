import keyData from "../keyAPI/keyApi";

function keyUnlock(){
  const currentDate = new Date();
  let tomorrow = currentDate.setDate(currentDate.getDate(currentDate.setHours(9)) + 1);
  function keyStart(){
    const getKey = json.strinify(keyData);
    const keyCountLeft = array.length(getKey);
    if (tomorrow || keyCountLeft !== 0) {
      for(let i = 0; i < keyCountLeft; i--) {
        if (keyCountLeft > 0){
          const keyValidated = getKey(key);
          return keyValidated;
        } if (keyCountLeft === 0){
          return "There are no more keys left!";
        }
        }
      }
    } keyStart();
  } keyUnlock();
  





// function modifyContent(){
// }
// window.addEventListener('DOMContentLoaded', modifyContent);







// function keyValidator(){
//   if (keyValidated) {
//     return key;
//   } if (!keyValidated){
//     return "Sorry, No more keys left.";
//   }
// }