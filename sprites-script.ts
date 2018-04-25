// Objectives: 
// 1: Make the objects generate one at a time [done]
// 1.5: To make the objects generate multiple times, instead of just random order of the 5 objects.
// 2: Make hitboxes
// 3: Put a score board

/* Bug found:
 Won't keep randomly generating after all 5 are done

 Possible solution:
 Create an array of randomly generated numbers and 
 then using a for loop to run through each item in it and create a new sprite
 to create rarities put an && and depend on the index number 

 Bug found with solution:
 Because the for loop is /inside/ the for loop that slows down the ticker app
 and making it create 100 objects then create 100 objects in less than a second is a problem

 Possible solution:
 Sync the for loop for creating the variables with the ticker app
*/


import {
    Sprite,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text,
    ticker,
} from "pixi.js";


// creates backgrounds & dimensions
const app: Application = new Application(960, 480);
document.body.appendChild(app.view);


// displays background from files
let background: Sprite = Sprite.fromImage("./beach.png");
app.stage.addChild(background);


// creates/displays main character
let tajika: Sprite = Sprite.fromImage("./tajika1.png");
tajika.scale.x = 1;
tajika.scale.y = 1;
tajika.x = 480;
tajika.y = 230;
app.stage.addChild(tajika);

// function that moves main character
window.onkeydown = (e: KeyboardEvent): void => {
    // set up constants that equal to arrow key movements
    const LEFT: number = 37;
    const RIGHT: number = 39;
    const STEP: number = 20;
    // if then statement that dictates x movement depending on input
    if (e.keyCode === LEFT) {
        tajika.x -= STEP;
    } else if (e.keyCode === RIGHT) {
        tajika.x += STEP;
    }
};


// creates CoconutLikeObject
class CoconutLikeObject {

    // creates class  properties
    numberOfCoconut: number;
    typeOfCoconut: Sprite;
    direction: number;
    // constructor that assigns properties depdening on the arguments
    constructor(z: number, picture: string) {
        this.numberOfCoconut = z;
        this.typeOfCoconut = Sprite.fromImage(picture);
        this.typeOfCoconut.scale.x = 0.40;
        this.typeOfCoconut.scale.y = 0.40;
        this.direction = 1;
    }
}
// creates new Brown Coconut
let coconutBrown = new CoconutLikeObject(0, "./coconutBrown.png");
coconutBrown.typeOfCoconut.x = 450;
coconutBrown.typeOfCoconut.y = 0;

// creates Bowling Ball
let coconutBowlingBall = new CoconutLikeObject(1, "./coconutBowlingBall.png");
coconutBowlingBall.typeOfCoconut.x = 400;
coconutBowlingBall.typeOfCoconut.y = 0;


// creates CoconutBomb
let coconutBomb = new CoconutLikeObject(2, "./coconutBomb.png");
coconutBomb.typeOfCoconut.x = 350;
coconutBomb.typeOfCoconut.y = 0;


// creates coconutGolden
let coconutGolden = new CoconutLikeObject(3, "./coconutGolden.png");
coconutGolden.typeOfCoconut.x = 300;
coconutGolden.typeOfCoconut.y = 0;

// creates coconutPokeball
let coconutPokeball = new CoconutLikeObject(4, "./coconutPokeball.png");
coconutPokeball.typeOfCoconut.x = 250;
coconutPokeball.typeOfCoconut.y = 0;

// creates array that houses all the coconut objects
let bc: CoconutLikeObject[] = [];

// commented out code was to slow down the ticker app, did not work
// app.ticker.speed = 1/1000;
// app.ticker.minFPS = 900000;

// works for index
let i = 0;
// counter variable that slows down how app ticker runs the coconut creator/ dictates x coordinates
let u = 0;

// supposed to be for creating hitboxes, but unsure how to implement it
// let isColliding = (a: CoconutLikeObject, b: Sprite = tajika): boolean => {
//     let ab: Rectangle = a.typeOfCoconut.getBounds();
//     let bb: Rectangle = b.getBounds();
//     return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
// };


// timer has to be 300 or else the loop resets too fast and the coconuts teleport to different
app.ticker.add((delta: number): void => {
    /* commented out code was an attempt to work through the array of numbers
     to generate new objects */
    // for (let i = 0; i <= 100; i++) {
    let numberarray: number[] = [];
    let maxnum = 5;
    let minnum = 0;
    let minchangex = 20;
    let maxchangex = 940;
    if (u >= 300) {
        // creates random varibales for the coconut types     
        for (let z = 0; z < 100; z++) {
            let randomcoconutValue: number = Math.floor(Math.random() * Math.floor(maxnum));
            numberarray[z] = randomcoconutValue;
        }

        // creates random variables for the x position
        /* Rohaid Note: Changed the min/max values so that the image didn't show up outside of screen
         I changed the random function from info I found online about the Math.random function
         It slims down the function and requires less variables, so the code becomes less difficult to tangle
         through */
        let randomxValue: number = Math.floor(Math.random() * Math.floor(maxchangex));

        // an attempt to create a random # as an index for the random # array for coconut type #
        let randomnum: number = Math.floor(Math.random() * Math.floor(101));

        /* set the if then statement to use the random num created
           unfortunately, it hasn't fixed the problem */
        if (numberarray[randomnum] === 0) {
            app.stage.addChild(coconutBrown.typeOfCoconut);
            bc[i] = coconutBrown;
            bc[i].typeOfCoconut.x = randomxValue;
            // add brown cocunut to bc  
        } else if (numberarray[randomnum] === 1) {
            app.stage.addChild(coconutBowlingBall.typeOfCoconut);
            bc[i] = coconutBowlingBall;
            bc[i].typeOfCoconut.x = randomxValue;
        } else if (numberarray[randomnum] === 2) {
            app.stage.addChild(coconutBomb.typeOfCoconut);
            bc[i] = coconutBomb;
            bc[i].typeOfCoconut.x = randomxValue;
        } else if (numberarray[randomnum] === 3) {
            app.stage.addChild(coconutGolden.typeOfCoconut);
            bc[i] = coconutGolden;
            bc[i].typeOfCoconut.x = randomxValue;
        } else if (numberarray[randomnum] === 4) {
            app.stage.addChild(coconutPokeball.typeOfCoconut);
            bc[i] = coconutPokeball;
            bc[i].typeOfCoconut.x = randomxValue;
        }

        // commented out code but I don't know what it does
        // bc[bc.length] = coconut;

        i++;
        u = 0;
    }
    // }
    u++;

    // let isColliding = (a: CoconutLikeObject, b: Sprite = tajika): boolean => {
    //     let xFallingObject = a.typeOfCoconut.x;
    //     let yFallingObject = a.typeOfCoconut.y;
    //     let xTajika = b.x;
    //     // let yTajika = b.y; always 230
    //     let xDelta = xFallingObject - xTajika;
    //     let yDelta = yFallingObject - 230;
    //     if (xDelta < 20 || xDelta > -20) {
    //         if () {
    //             return true;
    //         }
    //     } 
    //     // let ab: Rectangle = a.typeOfCoconut.getBounds();
    //     // let bb: Rectangle = b.getBounds();
    //     // return false;
    //     // return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    //     return false;
    // };


    for (let j: number = 0; j < bc.length; j++) {
        // sets the constant to equal to the object at index i, so it's changing coco by moving through
        // each index of the array
        const coco: CoconutLikeObject = bc[j];
        // takes the individual object in the Coconut array and then takes the direction and subtracts 5 each time
        coco.typeOfCoconut.y += 1.75 * coco.direction;

        // PUT THE IS COLLIDING STATEMENTS HERE

        // removes sprite object once it's below screen
        // if (isColliding(coco[j], tajika)) {
        //     // app.stage.removeChild(coco[j]);
        //     return false;
        // if (isColliding(coco[j], tajika)) {
        //     app.stage.removeChild(coco[j]);
        // }  

        let xFallingObject = coco.typeOfCoconut.x;
        let yFallingObject = coco.typeOfCoconut.y;
        let xTajika = tajika.x;
        // let yTajika = 230; // mentioned above when Tajika was first rendered on the screen
        // let xDelta = xFallingObject - xTajika;
        // let yDelta = (yFallingObject - yTajika);
        // if (xFallingObject < xTajika + 50 && xFallingObject > xTajika - 50) {
        if (xFallingObject < xTajika + 100 && xFallingObject > xTajika - 100 ) {
            if (yFallingObject < 245 && yFallingObject > 215) {
            app.stage.removeChild(coco.typeOfCoconut);
            }
        } else if (yFallingObject >= 512) {
            app.stage.removeChild(coco.typeOfCoconut);
        }
    }

});
