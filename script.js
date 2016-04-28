
var numRows = 3; // 1 header row + 3 body rows
var numCols = 4;

// Create table
var newTable = document.createElement('table');
document.body.appendChild(newTable);

// Create Table Header
var position = document.getElementsByTagName('table');
var newThead = document.createElement('thead');
position[0].appendChild(newThead);

position = document.getElementsByTagName('thead');
var newTr = document.createElement('tr');
position[0].appendChild(newTr);

// Create 4 Header Elements
for (var i = 0; i < numCols; i++) {
  position = document.getElementsByTagName('tr');
  var newTh = document.createElement('th');
  var newThText = document.createTextNode('Header ' + (i + 1) );
  newTh.appendChild(newThText);
  position[0].appendChild(newTh);
}

// Create Table Body
var position = document.getElementsByTagName('table');
var newTbody = document.createElement('tbody');
position[0].appendChild(newTbody);

// Create 3 body rows of 4 columns each
var xVal = 1;
var yVal = 1;
var index = 1;

for (var i = 0; i < numRows; i++) {
  position = document.getElementsByTagName('tbody');
  var newTr = document.createElement('tr');
  position[0].appendChild(newTr);

    for (var j = 0; j < numCols; j++) {
      position = document.getElementsByTagName('tr');
      var newTd = document.createElement('td');
      newTd.setAttribute('id', index);
      var newTdText = document.createTextNode(xVal + ' , ' + yVal);
      newTd.appendChild(newTdText);
      position[i+1].appendChild(newTd);
      xVal++;
      index++;
    }
  xVal = 1;
  yVal++;
}

function makeButton(button, type) {
  var newButton = document.createElement(button);
  var buttonText = document.createTextNode(type);
  newButton.setAttribute('id', type);
  newButton.appendChild(buttonText);
  document.body.appendChild(newButton);

}

// Create UP, LEFT, RIGHT, and DOWN buttons
makeButton('button', 'Up');
makeButton('button', 'Down');
makeButton('button', 'Left');
makeButton('button', 'Right');

// Create Mark Cell button
var newP = document.createElement('p');
document.body.appendChild(newP);
makeButton('button', 'Mark Cell');


function move(direction, selected) {

  var curr = selected.getAttribute('Id');
  console.log("Selected element:" + curr);

  if (direction == Up) {
    if (curr <= '4') {
      console.log('You cannot move up from here');
    }

  }

  else if (direction == Down) {
    if (curr >= '9') {
      console.log('You cannot move down from here');
    }
    newCurr = 4 + Number(curr);
    console.log("New curr: " + newCurr);

    selected.setAttribute('style', 'border: 1 px solid black');

    var newSelected = document.getElementById(toString(newCurr));
    newSelected.setAttribute('style', 'border: 2 px solid black');

  }

  else if (direction == Left) {
    if (curr == '1' || curr == '5' || curr == '9') {
      console.log('You cannot move left from here');
    }

  }

  else if (direction == Right) {
    if (curr == '4' || curr == '8' || curr == '12') {
      console.log('You cannot move right from here');
    }
  }
}

// Make first element bold
var selected = document.getElementById('1');
selected.setAttribute('style', 'border: 2px solid black');

//var curr = selected.getAttribute('Id');

document.getElementById('Up').addEventListener('click', function() {
  move(Up, selected);
}, false);

document.getElementById('Down').addEventListener('click', function() {
  move(Down, selected);
}, false);

document.getElementById('Left').addEventListener('click', function() {
  move(Left, selected);
}, false);

document.getElementById('Right').addEventListener('click', function() {
  move(Right, selected);
}, false);



/*
document.getElementById('Up').addEventListener("click", move(Up), false);
document.getElementById('Down').addEventListener("click", move(Down), false);
document.getElementById('Left').addEventListener("click", move(Left), false);
document.getElementById('Right').addEventListener("click", move(Right), false);
*/






alert('Poo');
