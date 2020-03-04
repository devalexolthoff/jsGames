
        checkSnakePosition = function () {
            if (snakeList[0].x > 500) {
                snakeList[0].x = 0
            }
            if (snakeList[0].x < 0) {
                snakeList[0].x = 500
            }
            if (snakeList[0].y > 500) {
                snakeList[0].y = 0
            }
            if (snakeList[0].y < 0) {
                snakeList[0].y = 500
            }
        }

        updateSnakeList = function () {
            for (var i = snakeList.length - 1; i >= 0; i--) {
                if (direction == 0) {
                    if (i === 0) {
                        snakeList[i].x = snakeList[i].x - 5;
                    } else {
                        snakeList[i].x = snakeList[i - 1].x;
                        snakeList[i].y = snakeList[i - 1].y;
                    }
                } else if (direction == 1) {
                    if (i === 0) {
                        snakeList[i].y = snakeList[i].y - 5;
                    } else {
                        snakeList[i].x = snakeList[i - 1].x;
                        snakeList[i].y = snakeList[i - 1].y;
                    }
                } else if (direction == 2) {
                    if (i === 0) {
                        snakeList[i].x = snakeList[i].x + 5;
                    } else {
                        snakeList[i].x = snakeList[i - 1].x;
                        snakeList[i].y = snakeList[i - 1].y;
                    }
                } else if (direction == 3) {
                    if (i === 0) {
                        snakeList[i].y = snakeList[i].y + 5;
                    } else {
                        snakeList[i].x = snakeList[i - 1].x;
                        snakeList[i].y = snakeList[i - 1].y;
                    }
                }
            }
        };