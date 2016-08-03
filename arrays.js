var x = [1, 4, 2];
var y = [-1, -2, -4];
var z = [-1, 2, -3, 5, -50, 0.5];

function highestNumber(x){
  var max = -9999999999999;
  x.forEach(function(basketball){
    if (basketball > max){
      max = basketball;
    }
  })
  return max;
}

function lowestNumber(x){
  var min = 9999999999999;
  x.forEach(function(basketball){
    if (basketball < min){
      min = basketball;
    }
  })
  return min;
}

function smallestNumber(x){
  var small = 99999999999999;
  x.forEach(function(basketball){
    if (Math.abs(basketball) < Math.abs(small)){
      small = basketball;
    }
  })
  return small;
}

function sum(x){
  var answer = 0;
  x.forEach(function(basketball){
    answer = basketball + answer;
  })
  return answer;
}

function mean(x) {
  var answer = 0;
  x.forEach(function(dog){
    answer = dog + answer;
  })
  answer = answer / x.length;

  return answer;
}

function indexHighestNumber(x) {
  var max = -9999999999999;
  var index;

  x.forEach(function(basketball){
    if (basketball > max){
      max = basketball;
    }
  })
  index = x.lastIndexOf(max);
  return index;
}

var siblings = ["Fred", "Daphne", "Velma", "Shaggy", "Scooby"];
var parents = ["Sally", "Joe", "Michelle", "Tony"];

//Sorting the elements into alphabetical order.
siblings.sort(); //Sorted the elements in our array alphabetically and saved.

//Sort in reverse alphabetical order.
parents.sort(); //sorts parents alphabetically.
parents.reverse(); //reverse the order of the elements.
//both functions save the new order of the array.

//combine 2 arrays, and sort in reverse alphabetical order
siblings.concat(parents).sort().reverse(); //siblings combines with parents, then sorts alphabetically, and then reverses.

function search(x){
  var football = prompt("Enter name you're looking for");
  x.forEach(function(basketball){
    if (football == basketball){
      console.log("Yes")
    } else {
      console.log("No")
    }
  })
}

var newArray = [];
function evenElements(x){
  newArray = [];
  x.forEach(function(basketball){
    if (basketball % 2 === 0) {
      newArray[newArray.length] = basketball;
    }
  })
}

function oddArray(x){
  newArray = [];
  x.forEach(function(basketball){
    if (basketball % 2 === 1) {
      newArray[newArray.length] = basketball;
    }
  })
}

function arrayMath(x, fun){
  newArray = []
  index = 0;
  x.forEach(function(basketball){
    newArray[index] = fun(basketball);
    index++;
  })
}

function filterArray(x, fun){
  newArray = []
  x.forEach(function(basketball){
    if (fun(basketball)){
      newArray[newArray.length] = basketball;
    }
  })
}

var magic8 = ["Yup!", "Fuhgeddaboutit", "Maybe", "What would your mother do?", "What would an Australian do? then do the opposite.", "Try Again Later"]

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function magic8Ball(){
  x = 0;
  while (x < 5){
  var question = prompt("What would you like to ask the magic 8-ball?"+" Type STOP (in all caps) to STOP");
  if (question == "STOP"){
    x = 10000;
  }
    else{
      alert(magic8[getRandomNumber(0, magic8.length-1)]);
    }
  }
}
