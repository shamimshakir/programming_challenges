/// this challengs from freecodecamp | Inventory Update
function updateInventory(arr1, arr2) {
    
    arr1.forEach(elem => {
        
        arr2.forEach((elem2, index2) => {
            
            if(elem[1] === elem2[1]){

                elem[0]+= elem2[0]
                arr2.splice(index2, 1)
                
            }

        })

    });
    return arr1.concat(arr2).sort((a, b) => a[1].localeCompare(b[1]))
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

let res = updateInventory(curInv, newInv);
console.log(res)
