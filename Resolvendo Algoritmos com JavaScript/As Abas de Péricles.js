var s = gets().split(' ');
let N = parseInt(s[0]);
let M = parseInt(s[1]);;

for (let j = 0; j < M; j++) {
    let acao = gets();;
    if (acao == "fechou") {
        N++;
    }
    else {
        N--;
    }
}
print(N);