function sym(...args) {
    /*
    Symmetric difference (commonly denoted by Δ) of two sets is the set of elements 
    which are in either of the two sets, but not in both.
    
    Symmetric difference কে Δ (ডেল্টা) দিয়ে প্রকাশ করা হয়, অর্থাৎ সেট A এবং সেট B এর মধ্যে যে এলিমেন্টগুলো উভয়ের মধ্যেই কমন নয় সেইগুলো 

    For example, sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].

    */

    let uniqueSets = args.map(item => [...new Set(item)])

    let difference = uniqueSets[0]

    for(let i = 1; i < uniqueSets.length; i++){
        let elem = uniqueSets[i]

        elem.forEach(el => {
            if(difference.includes(el)){
                let removeIndex = difference.indexOf(el)
                difference.splice(removeIndex, 1)
            }else{
                difference.push(el)
            }
        })

    }
    return difference.filter(item => item).sort((a,b) => a - b)
}

let res = sym([1, 2, 3], [5, 2, 1, 4]);
console.log(res)
