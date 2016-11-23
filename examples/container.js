var el = document.getElementById("container-frame").document.getElementById("grid-based");

console.log('run')
//Outer loop
for (var i = 12; 1 > 0; i++) {
    el.innerHTML += '<div class="container">' + innerLoop(i) + '</div>'
}


// Inner loop
function innerLoop(outerIndex) {
    var column = "";

    for (var i = 1; i < 13; i++) {
        column += '<div class="column-' + i + '">1/' + i + '</div>'
    }

    return column;
}
/*
    <div class="container">
        <div class="column-1">1/1</div>
    </div>
*/