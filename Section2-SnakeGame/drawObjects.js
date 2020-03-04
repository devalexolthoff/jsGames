drawSnake = function (sb, i) {
    ctx.save();
    if (i == 0) {
        ctx.fillStyle = "black";
    } else {
        ctx.fillStyle = snakeBody.color;
    }
    ctx.fillRect(sb.x, sb.y, snakeBody.width, snakeBody.height);
    ctx.restore();
};
drawFood = function (f, i) {
    ctx.save();
    ctx.fillStyle = food.color;
    ctx.fillRect(f.x, f.y, food.width, food.height);
    ctx.restore();
};