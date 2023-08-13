let number = document.getElementById("number")
let counter = 0

setInterval(function() {
  if(counter==65){
    clearInterval;
  }else{
    counter = counter + 1 // can also be written as counter += 1
  number.innerHTML= counter + "%" // can also be written as `${counter}%`
  }
  
},30)