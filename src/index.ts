import { Application } from 'pixi.js';
import { Scene } from './game/Scene'

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0xFFFBED,
    width: window.innerWidth,
    height: window.innerHeight,
})

const scene: Scene = new Scene()
app.stage.addChild(scene)