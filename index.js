var name = "Joe"
var height = "70"


// Don't worry about this
module.exports = { name, height
}

if (name === "Susan") {
    console.log("Expected: Susan, Received: Joe")
} else {
    console.log("Expected the name to be Susan")
}
