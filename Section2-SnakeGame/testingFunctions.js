testCollision = function (rect1, rect2) {
    return (
            (rect1.x <= rect2.x + food.width) &&
            (rect2.x <= rect1.x + snakeBody.width) &&
            (rect1.y <= rect2.y + food.height) &&
            (rect2.y <= rect1.y + snakeBody.height));
        }
testCollisionSnake = function(s1,s2){
    return ((Math.abs(s1.x-s2.x))< 5 && (Math.abs(s1.y-s2.y))< 5)
}