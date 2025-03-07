function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function applique(f, tab) {
    return tab.map(f);
}

console.log(fact(6));

applique(fact,[1,2,3,4,5,6]);

applique(function(n) { return (n+1); } , [1,2,3,4,5,6]);