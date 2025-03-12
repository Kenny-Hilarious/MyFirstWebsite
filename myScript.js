//This is where my javascript code is going to go
//TeaCup Ride Object, What would actually help is a slide deck
let changeFavorites = function(){
    document.getElementById("Favorites").innerHTML = "My Favorites";
} 
// Let's make a teacup ride!

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ride = {
    name: "The Mad Hatter",
    location: "Fantasyland",
    duration: 120,
    capacity: 20,
    open: true,
    guests: ["Alice", "Cheshire Cat", "Mad Hatter"],
    byebye: Math.floor(Math.random() * 10) + 1
};
console.log("Welcome to " + ride.name + "!");
console.log("We hope you enjoy your ride!");

rl.question("Who will be riding with us today? ", (userName) => {
    if (userName) {
        ride.guests.push(userName);
        console.log(`${userName} has been added to ${ride.name}. Hold on tight!`);
    }
    
    function rideTeacupRide(spinFactor) {
        console.log(spinFactor);
    }

    function askForSpin(count) {
        if (count === 0) {
            console.log("You survived the ride, thanks for riding with us!");
            rl.close();
            return;
        }

        rl.question("Spin the wheel by choosing a number 1-10: ", (spinFactor) => {
            spinFactor = parseInt(spinFactor);

            if (spinFactor == ride.byebye) {
                console.log("You spun too hard! you flew o ff the ride and hit your head :(");
                console.log("Thanks for riding with us!");
                rl.close();
                return;
                
                    
            } else {
                console.log("You spun, the tea cup gets faster!");
            }

            rideTeacupRide(spinFactor);
            askForSpin(count - 1);
        });
    }
    
    askForSpin(3);
    
});