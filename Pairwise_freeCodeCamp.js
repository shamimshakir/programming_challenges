//Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
//For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. 

function pairwise(arr, arg) {

    if(arr.length === 0)return 0;
    let pairArr = []

    for(let i = 0; i < arr.length; i++){
        var item = arr[i];

        for(let j = 0; j < arr.length; j++){
            var item2 = arr[j];

            if(item + item2 === arg && i !== j){

                if(!pairArr.includes(i) && !pairArr.includes(j)){

                    pairArr.push(i, j)

                }
            }
        }
    }
    return pairArr.reduce((acc,value) => acc + value)
}

let res = pairwise([1, 4, 2, 3, 0, 5], 7);
console.log(res)     // 11
