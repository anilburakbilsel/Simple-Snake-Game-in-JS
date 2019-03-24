<canvas id = "SnakeGame" width = "400" height = "400"></canvas>

<script>
    class SnakeGame {
        constructor(){ 
            this.canvas = document.getElementById('SnakeGame');
            this.context = this.canvas.getContext('2d');
            document.addEventListener('keydown', this.onKeyPress.bind(this));
        }

        init(){
            this.positionX = this.positionY = 10;
            this.appleX = this.appleY = 5;
            this.totalSize = 5;
            this.trail = [];
            this.gridSize = this.tileCount = 20;
            this.velocityX = this.velocityY = 0;
            this.timer = setInterval(this.loop.bind(this), 1000/15);
        }

        reset(){
            clearInterval(this.timer);
            this.init();
        }

        loop(){
            this.update();
            this.draw();
        }

        update(){

        }

        draw(){
            this.context.fillStyle = 'black';
            this.context,fillReact(0, 0, this.canvas.width, this.canvas.height);
            this.context.fillStyle = 'white';
            this.context.font = '20px Arial';
            this.context.fillText(this.tailSize, 20, 40);

            this.trail.forEach();
        }



        onKeyPress(e){

        }
    }

    const game =new SnakeGame();
    window.onload = () => game.init();
</script>