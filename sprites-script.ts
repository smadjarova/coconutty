import {
    Sprite,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text,
    ticker
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
    // creates new coconuts 
let coconutBrown = new CoconutLikeObject(0, "./coconutBrown.png");
coconutBrown.typeOfCoconut.x = 450;
coconutBrown.typeOfCoconut.y = 0;

    // creates Bowling Ball
let coconutBowlingBall = new CoconutLikeObject(1, "./coconutBowlingBall.png");
coconutBowlingBall.typeOfCoconut.x = 400;
coconutBowlingBall.typeOfCoconut.y = 0;
app.stage.addChild(coconutBowlingBall.typeOfCoconut);

    //creates CoconutBomb
let coconutBomb = new CoconutLikeObject(2, "./coconutBomb.png");
coconutBomb.typeOfCoconut.x = 350;
coconutBomb.typeOfCoconut.y = 0;
app.stage.addChild(coconutBomb.typeOfCoconut);

    //creates coconutGolden
let coconutGolden = new CoconutLikeObject(3, "./coconutGolden.png");
coconutGolden.typeOfCoconut.x = 300;
coconutGolden.typeOfCoconut.y = 0;
app.stage.addChild(coconutGolden.typeOfCoconut);

    //creates coconutPokeball
let coconutPokeball = new CoconutLikeObject(4, "./coconutPokeball.png");
coconutPokeball.typeOfCoconut.x = 250;
coconutPokeball.typeOfCoconut.y = 0;
app.stage.addChild(coconutPokeball.typeOfCoconut);

// creates array that houses all the coconut objects
let bc: CoconutLikeObject[] = [];
// app.ticker.speed = 1/1000;
// app.ticker.minFPS = 900000;

// works for index
let i = 0 ;
// counter variable that slows down how app ticker runs the coconut creator/ dictates x coordinates
let u = 0;
app.ticker.add((delta: number): void => {
    
    let maxCoconut: number = 4;
    let minCoconut: number = 0;
    // for (let i = 0; i <= 100; i++) {
 if (u >= 300) {
        //creates random varibales for the coconut types     
        let randomcoconutValue: number = Math.floor(Math.random() * (maxCoconut - minCoconut +1 )) + minCoconut;
        
        // creates random variables for the x position
        let minchangex = 0;
        let maxchangex = 960;
        let randomxValue: number = Math.floor(Math.random() * (maxchangex - minchangex +1 )) + minchangex;
        if (randomcoconutValue === 0) {
        app.stage.addChild(coconutBrown.typeOfCoconut);
        bc[i] = coconutBrown;
        bc[i].typeOfCoconut.x = randomxValue;
        //add brown cocunut to bc
        } else if (randomcoconutValue === 1) {
            app.stage.addChild(coconutBowlingBall.typeOfCoconut);
            bc[i] = coconutBowlingBall;
            bc[i].typeOfCoconut.x = randomxValue; 
        } else if (randomcoconutValue === 2) {
            app.stage.addChild(coconutBomb.typeOfCoconut);
            bc[i] = coconutBomb;
            bc[i].typeOfCoconut.x = randomxValue;
        } else if (randomcoconutValue === 3) {
            app.stage.addChild(coconutGolden.typeOfCoconut);
            bc[i] = coconutGolden;
            bc[i].typeOfCoconut.x = randomxValue;
        } else if (randomcoconutValue === 4) {
            app.stage.addChild(coconutPokeball.typeOfCoconut);
            bc[i] = coconutPokeball;
            bc[i].typeOfCoconut.x = randomxValue;
        }

        // bc[bc.length] = coconut;
 
        // adds to the screen
        // app.stage.addChild(coconutBrown);
        i++;
        u = 0;
    }
    // }
    u++;

    for (let j: number = 0; j < bc.length; j++) {
        // sets the constant to equal to the object at index i, so it's changing coco by moving through
        // each index of the array
        const coco: CoconutLikeObject = bc[j];
        // takes the individual object in the Coconut array and then takes the direction and subtracts 5 each time
        coco.typeOfCoconut.y += 1.75 * coco.direction;
       
        // removes sprite object once it's below screen
        if (coco.typeOfCoconut.y >= 512) {
            app.stage.removeChild(coco[j]);
        }

 
    
   
       } ;

    

let isColliding = (a: DisplayObject, b: DisplayObject): boolean => {
    let ab: Rectangle = a.getBounds();
    let bb: Rectangle = b.getBounds();
    return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
};

    })
