/* #4 SHAPE AREA
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1.
An n-interesting polygon is obtained by taking the (n - 1) -interesting polygon and appending 1-interesting polygons to its rim, side by side.
You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

*/



// # Try 1
function edge(n){
    return n > 1 ? (n-1)*4 : 1
}
function shapeArea(n) {
    var sum = 0
    for(var i=1; i<=n; i+=1) {
        sum += edge(i)
    }
    return sum

}

// # Optimimum Solution
function shapeArea(n) {
    return n * (n-1) * 2 + 1
}

// # Try 2
function shapeArea(n) {
    return n > 1 ? n * (n-1)*2 : 1
}

