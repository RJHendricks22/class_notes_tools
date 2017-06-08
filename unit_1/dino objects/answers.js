"use strict";
(function(){

  var buenosAires = {
  location: "Buenos Aires",
  depthInMeters: "400",
  annualBudget: 1000000,
  specimens: ["Dilophosaurus","Brachiosaurus"]
};

var mexico = {
  location: "Mexico",
  depthInMeters: "350",
  annualBudget: 900000,
  specimens: ["Gallimimus","Parasaurolophus"]
};

var snakewaterMontana = {
  location: "SnakewaterMontana",
  depthInMeters: "10",
  annualBudget: 150000,
  specimens: ["Velociraptor","Brachiosaurus"]
};

var nicaragua = {
  location: "Nicaragua",
  depthInMeters: "200",
  annualBudget: 1500000,
  specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]
};


function logSpecimens(obj) {
  for (var item in obj){
    if (item === 'specimens'){
      obj.specimens.forEach(function(specimen){
        console.log(specimen)
      })
    }
  }
}

// logSpecimens(buenosAires);
// logSpecimens(mexico);
// logSpecimens(snakewaterMontana);
// logSpecimens(nicaragua);

var grossDepths = 0;

function addDepth(obj){
  for (var item in obj) {
    if (item === 'depthInMeters'){
      grossDepths += Number(obj.depthInMeters)
    }
  }
}

addDepth(buenosAires);
addDepth(mexico);
addDepth(snakewaterMontana);
addDepth(nicaragua);

var avgDepth = grossDepths / 4;

// console.log(avgDepth)

var hammondsMines = [];

var addMines = function (arr, obj) {
  arr.push(obj);
  return arr;
};

addMines(hammondsMines, nicaragua);
addMines(hammondsMines, snakewaterMontana);
addMines(hammondsMines, mexico);
addMines(hammondsMines, buenosAires);

// console.log(hammondsMines);


//find all locations
// for (i = 0; i < hammondsMines.length; i++) {
//    console.log(hammondsMines[i].location);
//  }

var budgetArr = 0;

// annual op cost
hammondsMines.forEach( function(mine) {
  budgetArr += mine.annualBudget;
})

// console.log(budgetArr)

//alt method:
var totalBudget  = 0;
for (var i = 0; i < hammondsMines.length; i ++) {
  totalBudget += Number(hammondsMines[i].annualBudget);
}
// console.log(totalBudget);


//avg depth
var totalDepth = 0;

hammondsMines.forEach (function (mine) {
  var depth = Number(mine.depthInMeters);
  totalDepth += depth;
});

// console.log(totalDepth);

var avgDepth = totalDepth / (hammondsMines.length);

// console.log(avgDepth);


//find average cost per meter of the entire operation
var cumulativeDigCost = (budgetArr / totalDepth);

// console.log(cumulativeDigCost);

// to find the cost per meter, we'd need to divide cost by meter.
// we need to convert meters from a string to a number
// then we need to make a function that divides annualBudget by the depth;
// then we need to return that value to a new variable.

var mostExpensive = { annualBudget : 0, depthInMeters: '1'};

for (var i = 0; i < hammondsMines.length; i ++) {
  if (
    (mostExpensive.annualBudget / Number(mostExpensive.depthInMeters) )
    < (hammondsMines[i].annualBudget/Number(hammondsMines[i].depthInMeters) )
    ) {
    mostExpensive = hammondsMines[i];
  }
}
// console.log(mostExpensive);

// print all data in each object
for (var i = 0; i < hammondsMines.length; i ++) {
  for (var key in hammondsMines[i]) {
      if (typeof(hammondsMines[i][key]) !== "object") {
        console.log(hammondsMines[i][key]);
      } else {};
  }
}

})();
