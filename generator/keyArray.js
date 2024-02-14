function newKeys(){
  const currentDate = new Date();
  let tomorrow = currentDate.setDate(currentDate.getDate(currentDate.setHours(7)) + 1);
  function replenKeys(){
    if(tomorrow){
      const replenisher = ['randomUUID' * 10];
    } if (!tomorrow){
      return "Sorry out of keys!";
    }
  }
}