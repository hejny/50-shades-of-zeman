export default class Controls {
    public angle: number = 1;

    constructor(el: Window) {
        if ('DeviceOrientationEvent' in el) {
            el.addEventListener('deviceorientation', (event) => this.handleOrientation(event));
        }
        el.addEventListener('keydown', (event) => this.handleKeyPress(event));
    }

    handleOrientation(event) {
        if (event.gamma < -45) {
            this.angle = -45;
        } else if (event.gamma > 45) {
            this.angle = 45;
        } else {
            this.angle = event.gamma;
        }
    }

    handleKeyPress(event) {
        switch(event.keyCode) {
            case 37:
                this.angle = Math.max(this.angle - 2, -45);
                break;
            case 39:
                this.angle = Math.min(this.angle + 2, 45);
                break;
        }
    }
}