document.onkeydown = function (event) {
    // 0 left
    //1 up
    //2 right
    //3 down
    if (event.keyCode == 37) {
        direction = 0;
    } else if (event.keyCode == 38) {
        direction = 1;
    } else if (event.keyCode == 39) {
        direction = 2;
    } else if (event.keyCode == 40) {
        direction = 3;
    }
};