function generate(n) {
    if (n === 1) {
        return ["0", "1"];
    }
    const ans = [];
    const temp = generate(n - 1);
    for (let i = 0; i < temp.length; i++) {
        ans.push("0" + temp[i]);
    }
    for (let i = temp.length - 1; i >= 0; i--) {
        ans.push("1" + temp[i]);
    }
    return ans;
}

function main() {
    const n = 2;
    const garyString = generate(n);
    const ans = [];
    console.log(garyString);
    for (const i of garyString) {
        ans.push(parseInt(i, 2));
    }
    for (const val of ans) {
        console.log(val + " ");
    }
}

main();
