let canvas = <HTMLCanvasElement> document.getElementById("canvas")


class PhyObject {
    mass: number;
    x: number
    y:number
    width: number
    height: number
    screen: CanvasRenderingContext2D
    hold: boolean

    constructor(screen:HTMLCanvasElement, mass:number, x:number, y:number, width:number, height:number) {
        this.mass = mass
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.screen = screen.getContext("2d")!
        this.hold = false
    }

    draw() {
        this.screen.clearRect(0,0,this.screen.canvas.width, this.screen.canvas.height)
        this.screen.beginPath();
        this.screen.fillRect(this.x, this.y, this.width, this.height)
    }


    grav() {
        requestAnimationFrame(() => {
            this.grav()
        })

        if(this.y < this.screen.canvas.height - this.height) {
            this.y = this.y + (9.8 * this.mass)
        } else {
            this.y = this.screen.canvas.height - this.height
        }

        this.draw()
    }


    init() {
        requestAnimationFrame(() => {
            this.grav()
        })
    }

}

const rec_one = new PhyObject(canvas,0.4,0,0,50,50)
const rec_two = new PhyObject(canvas,0.4,70,0,50,50)

rec_one.init()
rec_two.init()
