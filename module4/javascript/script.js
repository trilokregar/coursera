var arrayOfNames = ["Jeeshan", "rahul", "Kriti", "jeevan", "Jaan", "Madhu", "jhanvi"];

function classification(array) {
    var nameWithHello = [];
    var nameWithGoodbye = [];

    for (var i = 0; i < array.length; i++) {
        var personName = array[i];

        var startingLetter = personName[0];

        if (startingLetter === "j" || startingLetter === "J") {
            var goodbyeResponse = "Goodbye" + " " + personName;
            // console.log("goodbye names are = ", goodbyeResponse);
            nameWithGoodbye.push(goodbyeResponse);

        } else {
            var helloResponse = "Hello" + " " + personName;

            // console.log("hello names are = ", helloResponse);
            nameWithHello.push(helloResponse);
        }
    }
    console.log("\n", "WITHOUT 'J/j' firstLetter names are = ", nameWithHello, "\n", "\n", "WITH 'J/j' firstLetter names are = ", nameWithGoodbye);
}
classification(arrayOfNames);