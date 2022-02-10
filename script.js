var canvas = new Sceene();
var sceene = canvas.ctx;
var c = canvas.canvas;

var player = new Player(new Vector2(50,50));

var camera = new Camera(c.width * 0.5,c.height * 0.5);

function setup() {
    update();
}

function update() {
    sceene.clearRect(0,0,c.width,c.height);

    player.move();
    camera.update(player);
    player.render();

    requestAnimationFrame(update);
}
