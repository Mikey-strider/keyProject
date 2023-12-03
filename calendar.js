function modifyContent(){

  const currentDay = new Date();
  let tomorrowDay = new Date();
  tomorrowDay.setDate(currentDay.getDate() + 1);


}
window.addEventListener('DOMContentLoaded', modifyContent);