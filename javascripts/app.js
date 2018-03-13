// ====================== Rover Object
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ====================== Commands - I included two ways of receiving commands. 
var input = "rffbfflfrbf";   //Changed this to include some "b's for the bonus section"
/*
function command(input) {
  for (var i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      default: //Not sure if any code needs to be defined here to validate the input? Is it ok to just leave it blank?
        break;
    }
  }
  console.log(rover.travelLog);
}
*/

/*Why does this if statement below not work the same way as the switch statement above? */

function command(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "r") {
      turnRight(rover);
    } else if (input[i] === "l") {
     turnLeft(rover);
    } else if (input[i] === "f") {
      moveForward(rover);
    } else if (input[i] === "b") {
      moveBackward(rover);
    }
  }
}

// ====================== Functions

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
      rover.direction = rover.direction;
      break;
  }
}

// Do we always need a "default" case in switch statements? Nothing happened when I didn't include it originally.

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
      rover.direction = rover.direction;
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
    case 'N':
      rover.y = rover.y - 1;
      break;
    case "E":
      rover.x = rover.x + 1;
      break;
    case "S":
      rover.y = rover.y + 1;
      break;
    case "W":
      rover.x = rover.x - 1;
      break;
    default:
      rover.x = rover.x;
      break;
  }
  rover.travelLog.push(rover.x + "," + rover.y); 
}

function moveBackward(rover){
  console.log("moveBackward was called")
  switch (rover.direction) {
    case 'N':
      rover.y = rover.y + 1;
      break;
    case "E":
      rover.x = rover.x - 1;
      break;
    case "S":
      rover.y = rover.y - 1;
      break;
    case "W":
      rover.x = rover.x + 1;
      break;
    default:
      rover.x = rover.x;
      break;
  }
  rover.travelLog.push(rover.x + "," + rover.y); 
}