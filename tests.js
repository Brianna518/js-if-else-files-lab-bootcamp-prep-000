
var index = require("./index.js")
if (index.name === "Susan") {
    console.log("Expected: Susan, Received: Joe")
} else {
    console.log("Expected: Susan, Received: Joe")
}


var index = require("./index.js")

if (index.height === 74) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
