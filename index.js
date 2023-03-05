import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bg from "./Bg/Bg.js";
import Bg2 from "./Bg2/Bg2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Bg: new Bg({
    x: -272,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Bg2: new Bg2({
    x: 193,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
