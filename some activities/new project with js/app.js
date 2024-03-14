// let marks = [85, 45, 56, 85, 37];

// let sum = 0;

// for
//     (let val of marks) {
//         sum += val;

//     }
//     let avg = sum / marks.length;
//     console.log(`avg marks of class = ${avg}`);

// first programme is end here


let items = [ 250, 645, 300, 900, 50];
 
for(let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;

}
console.log(items);