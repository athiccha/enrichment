/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.s = 2;
    this.vars.v = -6.965;
    this.vars.d = -5;
    this.vars.i = 25;
  }
}
