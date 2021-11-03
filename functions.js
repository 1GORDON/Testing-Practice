const functions = {
  add: (num1, num2) => num1 + num2,
  stringLength: (name) => {

    newName = name.length;
    if(newName >= 1 && newName < 10){
      console.log("Correct");
    }else{
      console.log("Not Correct");
    }
    return newName;
  },

  reverseString: (name) => {
    newName = name.split('').reverse().join('');
    return newName;
  }
}

module.exports = functions;