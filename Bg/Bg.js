/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bg extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bg", "./Bg/costumes/bg.svg", { x: 240, y: 180 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.goto(0, 0);
    while (true) {
      this.x += -0.5;
      if (this.x < -460) {
        this.goto(465, 0);
      }
      yield;
    }
  }
}
