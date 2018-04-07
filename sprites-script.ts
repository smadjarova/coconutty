import {
    Sprite,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text
} from "pixi.js";

const app: Application = new Application(960, 480);
document.body.appendChild(app.view);
// creates the background
let background: Sprite = Sprite.fromImage("./beach.png");
app.stage.addChild(background);

// creates the main character and sets the scale 
let tajika: Sprite = Sprite.fromImage("./tajika2.png");
tajika.scale.x = 1;
tajika.scale.y = 1;
// puts the location of tajika on screen 
tajika.x = 480;
tajika.y = 230;
// adds tajika to the stage 
app.stage.addChild(tajika);

// falling animation/hit boxes 

/*
   You'll notice our goal (or cpuhat) is also a Sprite, we'll describe
   how we're going to differentiate these objects later. 
*/


// creates a new class for the objects 
class Coconut {
    sprite: Sprite;
    direction: number = 1;
    constructor(sprite: Sprite) {
        this.sprite = sprite;
    }
}


// abbreviating the objects to a single character
// bc is the brown coconut
let bc: Coconut[] = [];

// updates every 60 seconds 
// this creates the coconuts falling on repeat
// NEEDED: for the x variable to change position
app.ticker.add((delta: number): void => {
    for (let i: number = 0; i < 1; i++) {
        let coconutBrown: Sprite = Sprite.fromImage("./coconutBrown.png");

        // scales the image
        coconutBrown.scale.x = .40;
        coconutBrown.scale.y = .40;

        // sets location, i.e needs to change location
        coconutBrown.x = 450 + 60 * i;
        coconutBrown.y = 200;
        
        // Creates a new Coconut
        let coconut: Coconut = new Coconut(coconutBrown);
        bc[bc.length] = coconut;

        // adds to the screen 
        app.stage.addChild(coconutBrown);
    }

    for (let i: number = 0; i < bc.length; i++) {
        // sets the constant to equal to the object at index i, so it's changing coco by moving through
        // each index of the array 
        const coco: Coconut = bc[i];
        // takes the individual object in the Coconut array and then takes the direction and subtracts 5 each time
        coco.sprite.y += 5 * coco.direction;
        
        // removes sprite object once it's below screen 
        if (coco.sprite.y >= 512) {
            app.stage.removeChild(coco[i]);
        }

       
    }
    // let coconutBomb: Sprite = Sprite.fromImage("./coconutBomb.png");
    // cpuhat.scale.x = 0.1;
    // cpuhat.scale.y = 0.1;
    // cpuhat.x = 450;
    // cpuhat.y = 240;
    // app.stage.addChild(cpuhat);


    window.onkeydown = (e: KeyboardEvent): void => {
        const LEFT: number = 37;
        const RIGHT: number = 39;
        const STEP: number = 20;
        if (e.keyCode === LEFT) {
            tajika.x -= STEP;
        } else if (e.keyCode === RIGHT) {
            tajika.x += STEP;
        }
    };
}
);
