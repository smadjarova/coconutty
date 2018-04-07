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

let tajika: Sprite = Sprite.fromImage("./tajika2.png");
tajika.scale.x = 1;
tajika.scale.y = 1;
tajika.x = 480;
tajika.y = 230;
app.stage.addChild(tajika);

/*
   You'll notice our goal (or cpuhat) is also a Sprite, we'll describe
   how we're going to differentiate these objects later. 
*/

let coconutBrown: Sprite = Sprite.fromImage("./coconutBrown.png");
coconutBrown.scale.x = .40;
coconutBrown.scale.y = .40;
coconutBrown.x = 450;
coconutBrown.y = 200;
app.stage.addChild(coconutBrown);

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
