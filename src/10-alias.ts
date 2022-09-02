(()=>{
  type UserID = string |number|boolean;
  let userID: UserID;
  function greting ( userID:UserID){
    if(typeof userID === 'string'){
      console.log(`string ${userID.toLocaleLowerCase()}`);
    }
  }

  //literal types
  let shitrSize:'S'|'M'|'L'|'XL';
  shitrSize = 'M'
  shitrSize = 'L'
  shitrSize = 'XL'
})();
