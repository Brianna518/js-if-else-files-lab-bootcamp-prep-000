
var index = require("./index.js")
 console.log(index.name)

if (index.name === "Susan") {
    console.log("Expected: Susan, Received: Joe")
} else {
    console.log("Expected: Susan, Received: Joe")
}


var index = require("./index.js")
 console.log(index.height)

if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
