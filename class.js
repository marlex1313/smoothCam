class Player {
    constructor(vec) {
        this.pos = new Vector2(-vec.x*0.5,-vec.y*0.5);
        this.vec = vec;
    }

    move() {
        if(keys.includes(37)) {this.pos.x -= 4}//left
        if(keys.includes(39)) {this.pos.x += 4}//right
        if(keys.includes(38)) {this.pos.y -= 4}//up
        if(keys.includes(40)) {this.pos.y += 4}//down
    }

    render() {
        sceene.fillStyle = "red";
        sceene.fillRect(this.pos.x + camera.x,this.pos.y + camera.y,this.vec.x,this.vec.y);
    }
}

class Camera {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    update(player) {
        //follow towards player
        let speed = 0.1;

        let diffX = (player.pos.x + player.vec.x*0.5 + camera.x) - c.width*0.5;
        let diffY = (player.pos.y + player.vec.y*0.5 + camera.y) - c.height*0.5;
        if(getDist(new Vector2(diffX,diffY),new Vector2(0,0)) > 1) {
            this.x -= diffX*speed;
            this.y -= diffY*speed;
        }
    }
}
