
import {
    Sprite,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text,
    ticker,
} from "pixi.js";

// Global variables relating to points
let points: number = 0;
let pointCounter = document.getElementById("mypoints") as HTMLSpanElement;
let pointAllowed: boolean = true;
// Global variables relating to random x values at which CoconutLikeObject will fall 
let minchangex = 150;
let maxchangex = 850;
let randomxValue1: number = Math.floor(Math.random() * Math.floor(maxchangex));
let randomxValue2: number = Math.floor(Math.random() * Math.floor(maxchangex));
let randomxValue3: number = Math.floor(Math.random() * Math.floor(maxchangex));
let randomxValue4: number = Math.floor(Math.random() * Math.floor(maxchangex));
let randomxValue5: number = Math.floor(Math.random() * Math.floor(maxchangex));


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
    const STEP: number = 50;
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

// creates Bowling Ball
let coconutBowlingBall = new CoconutLikeObject(1, "./coconutBowlingBall.png");

// creates CoconutBomb
let coconutBomb = new CoconutLikeObject(2, "./coconutBomb.png");

// creates coconutGolden
let coconutGolden = new CoconutLikeObject(3, "./coconutGolden.png");

// creates coconutPokeball // meant to be an Easter egg (dropping if sun is clicked) but game is not complete enough to add this
let coconutPokeball = new CoconutLikeObject(4, "./coconutPokeball.png");

// creates array that houses all the coconut objects
let bc: CoconutLikeObject[] = [];

// counter variable that slows down how app ticker runs the coconut creator/ dictates x coordinates
let u = 0;


// timer has to be 300 or else the loop resets too fast and the coconuts teleport to different locations before falling off the screen entirely
app.ticker.add((delta: number): void => {
    app.ticker.speed = .25;
    let numberarray: number[] = [];
    // max and min set the possible coconuts to be called 
    let maxnum = 5;
    let minnum = 0;
    let randomcoconutValue: number = Math.floor(Math.random() * Math.floor(maxnum)) - 1;
    if (u >= 300) {
        if (randomcoconutValue === 0) {
            app.stage.addChild(coconutBrown.typeOfCoconut);
            bc[bc.length] = coconutBrown;
            bc[bc.length - 1].typeOfCoconut.x = randomxValue1;
        } else if (randomcoconutValue === 1) {
            app.stage.addChild(coconutBowlingBall.typeOfCoconut);
            bc[bc.length] = coconutBowlingBall;
            bc[bc.length - 1].typeOfCoconut.x = randomxValue2;
        } else if (randomcoconutValue === 2) {
            app.stage.addChild(coconutBomb.typeOfCoconut);
            bc[bc.length] = coconutBomb;
            bc[bc.length - 1].typeOfCoconut.x = randomxValue3;
        } else if (randomcoconutValue === 3) {
            app.stage.addChild(coconutGolden.typeOfCoconut);
            bc[bc.length] = coconutGolden;
            bc[bc.length - 1].typeOfCoconut.x = randomxValue4;
        } else if (randomcoconutValue === 4) {
            app.stage.addChild(coconutPokeball.typeOfCoconut);
            bc[bc.length] = coconutPokeball;
            bc[bc.length - 1].typeOfCoconut.x = randomxValue5;
        }
        u = 0;
    }
    u++;



    for (let j: number = 0; j < bc.length; j++) {
        // sets the constant to equal to the object at index i, so it's changing coco by moving through
        // each index of the array
        const coco: CoconutLikeObject = bc[j];
        // takes the individual object in the Coconut array and then takes the direction and subtracts 5 each time
        coco.typeOfCoconut.y += 2 * coco.direction;

        // PUT THE IS COLLIDING STATEMENTS HERE
        let xFallingObject = coco.typeOfCoconut.x;
        let yFallingObject = coco.typeOfCoconut.y;
        let xTajika = tajika.x;

        // "Hit boxes" and point assignment
        // og coconut = +5
        // bowling ball = -5
        // golden coconut = +5 as many times as the ticker runs (ticks * 5)
        // bomb = -5 in the same way as teh golden coconut works 
        let message: Text = new Text("hit box worked");
        if (xFallingObject < xTajika + 120 && xFallingObject > xTajika - 25) {
            if (yFallingObject > 215 && yFallingObject < 245) {
                if (pointAllowed) {
                    if (coco.numberOfCoconut === 0) {
                        app.stage.removeChild(coco.typeOfCoconut);
                        points += 5;
                        pointAllowed = false;
                        yFallingObject = 0;
                    } else if (coco.numberOfCoconut === 1) {
                        app.stage.removeChild(coco.typeOfCoconut);
                        points -= 5;
                        pointAllowed = false;
                        yFallingObject = 0;
                    } else if (coco.numberOfCoconut === 2) {
                        app.stage.removeChild(coco.typeOfCoconut);
                        points -= 5;
                        yFallingObject = 0;
                    } else if (coco.numberOfCoconut === 3) {
                        app.stage.removeChild(coco.typeOfCoconut);
                        points += 5;
                        yFallingObject = 0;
                    }
                }
            } else if (yFallingObject >= 300) {
                app.stage.removeChild(coco.typeOfCoconut);
                pointAllowed = true;
            }
        }
        pointCounter.textContent = "Points: " + points;
    }
});

