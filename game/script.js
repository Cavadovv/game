let ball = document.querySelector('#ball');
let bar = document.querySelector('#bar');

let ballX = 0;
let ballY = 0;
let x = 5;
let y = 5;
let barX = 0;
let count=40;


document.addEventListener('keydown', barMove);
setInterval(ballMove, count);


function barMove(e) {

    if (e.keyCode == 39) {
        if (barX < 500) {
            barX += 25;
        };
    }

    if (e.keyCode == 37) {
        if (barX > 0) {
            barX -= 25;
        }
    }

    bar.style.left = barX + 'px';


}



function ballMove() {
    count++;
    console.log(count);
    if (ballX < 0 || ballX > 560) {
        x *= - 1;
        console.log(x);
    }


    ballX += x;

    //console.log(ballX);

    ball.style.left = ballX + 'px';

    //

    if (ballY < 0 || ballY > 460) {
        y *= - 1;
        //console.log(ballY);
    }

    ballY += y;

    ball.style.top = ballY + 'px';
};


function gameover() {
    if (ballY == 0 && ballX !== barX) {
        alert('game over')
    }


    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
};

