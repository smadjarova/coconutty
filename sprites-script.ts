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

let background: Sprite = Sprite.fromImage("./beach.png");
app.stage.addChild(background);

let tajika: Sprite = Sprite.fromImage("./tajika1.png");
tajika.scale.x = 1;
tajika.scale.y = 1;
tajika.x = 480;
tajika.y = 230;
app.stage.addChild(tajika);

window.onkeydown = (e: KeyboardEvent): void => {
    
    // if (e) {
    //     let movement = true
    //     if (movement) {
    //      tajika = Sprite.fromImage("./tajika1.png");
    //     } 
    //     else {
    //         tajika = Sprite.fromImage("./tajika2.png");
    //     }
    // }

    const LEFT: number = 37;
    const RIGHT: number = 39;
    const STEP: number = 20;
    if (e.keyCode === LEFT) {
        tajika.x -= STEP;
    } else if (e.keyCode === RIGHT) {
        tajika.x += STEP;
    }
};

class CoconutLikeObject {

    numberOfCoconut: number;
    typeOfCoconut: Sprite;

    constructor(z: number, picture: string) {
        this.numberOfCoconut = z;
        this.typeOfCoconut = Sprite.fromImage(picture);
        this.typeOfCoconut.scale.x = 0.40;
        this.typeOfCoconut.scale.y = 0.40;
    }
}

let coconutBrown = new CoconutLikeObject(0, "./coconutBrown.png");
coconutBrown.typeOfCoconut.x = 450;
coconutBrown.typeOfCoconut.y = 200;
app.stage.addChild(coconutBrown.typeOfCoconut);

let coconutBowlingBall = new CoconutLikeObject(1, "./coconutBowlingBall.png");
coconutBowlingBall.typeOfCoconut.x = 400;
coconutBowlingBall.typeOfCoconut.y = 200;
app.stage.addChild(coconutBowlingBall.typeOfCoconut);

let coconutBomb = new CoconutLikeObject(2, "./coconutBomb.png");
coconutBomb.typeOfCoconut.x = 350;
coconutBomb.typeOfCoconut.y = 200;
app.stage.addChild(coconutBomb.typeOfCoconut);

let coconutGolden = new CoconutLikeObject(2, "./coconutGolden.png");
coconutGolden.typeOfCoconut.x = 300;
coconutGolden.typeOfCoconut.y = 200;
app.stage.addChild(coconutGolden.typeOfCoconut);

let coconutPokeball = new CoconutLikeObject(2, "./coconutPokeball.png");
coconutPokeball.typeOfCoconut.x = 250;
coconutPokeball.typeOfCoconut.y = 200;
app.stage.addChild(coconutPokeball.typeOfCoconut);


// let coconutBomb: Sprite = Sprite.fromImage("./coconutBomb.png");
// cpuhat.scale.x = 0.1;
// cpuhat.scale.y = 0.1;
// cpuhat.x = 450;
// cpuhat.y = 240;
// app.stage.addChild(cpuhat);



