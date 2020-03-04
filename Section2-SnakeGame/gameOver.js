isGameOver = function(){
    for (i in snakeList){
        if (i==0){
            continue
        }
        if (testCollisionSnake(snakeList[0],snakeList[i])){
            clearInterval(intervalVariable)
            return
        }
    }
}