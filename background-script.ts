import {
    Sprite,
    Application,
} from "pixi.js";

const app: Application = new Application(960, 480);
document.body.appendChild(app.view); // <-- this appends the app's view property to the HTML document element

let background: Sprite = Sprite.fromImage("./beach.png");
app.stage.addChild(background);


