// Copyright 2016, Dennis Norton.
// All rights reserved.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

(function () {
    var el = document.getElementById("grid-based");
    var colData = [
        [1,1,1,1,1,1,1,1,1,1,1,1], // 1
        [2,2,2,2,2,2], // 2
        [3,3,3,3], // 3
        [4,4,4], // 4
        [5,2,5], // 5
        [6,6], // 6
        [7,5], // 7
        [8,4], // 8
        [9,3], // 9
        [10,2], // 10
        [11,1], // 11
        [12], // 12
    ];

    //Outer loop
    for (var i = 0; i < colData.length; i++) {
        el.innerHTML += '<div class="container">' + innerLoop(colData[i],i) + '</div>'
    }

    // Inner loop
    function innerLoop(data,index) {
        var column = "";

        for (var i = 0; i < data.length; i++) {
            column += '<div class="column-' + data[i] + '">.column-' + data[i] + '</div>'
        }
        return column;
    }
})();