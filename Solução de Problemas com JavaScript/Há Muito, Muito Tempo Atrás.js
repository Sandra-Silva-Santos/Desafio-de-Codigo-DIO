let N = parseInt(gets())
let T, anos;
for (let i = 0; i < N; i++) {
    T = parseInt(gets())
    if (T >= 2015) {
        anos = T - 2014;
        print(anos + " A.C.");
    } else {
        anos = 2015 - T;
        print(anos + " D.C.");
    }

}