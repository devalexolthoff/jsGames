updateSnakePosition = function () {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    while (eaten) {
        let pos_x = Math.random() * 485 + 5;
        let pos_y = Math.random() * 485 + 5;
        foodList[0] = {
            x: pos_x,
            y: pos_y
        };
        eaten = false;
    }
    foodList.forEach(drawFood)
    snakeList.forEach(drawSnake);
    if (testCollision(snakeList[0], foodList[0])) {
        foodList = [];
        eaten = true;
        score += 1;
        let new_x, new_y;
        if (direction === 0) {
            new_x = snakeList[0].x - 10;
            new_y = snakeList[0].y;
        } else if (direction === 1) {
            new_x = snakeList[0].x;
            new_y = snakeList[0].y - 10;
        } else if (direction === 2) {
            new_x = snakeList[0].x + 10;
            new_y = snakeList[0].y;
        } else if (direction === 3) {
            new_x = snakeList[0].x;
            new_y = snakeList[0].y + 10;
        }
        snakeList.unshift({
            x: new_x,
            y: new_y
        });
    };
    ctx.fillText('Score: ' + score, 400,30)
    
    checkSnakePosition();
    updateSnakeList();
    isGameOver();
};


startGame = function () {
    snakeList = [{
            x: 220,
            y: 200
        },
        {
            x: 210,
            y: 200
        },
        {
            x: 200,
            y: 200
        }
    ];
    foodList = [];
    direction = 99;
    eaten = true
    running = true
    intervalVariable = setInterval(updateSnakePosition, 20);    
};