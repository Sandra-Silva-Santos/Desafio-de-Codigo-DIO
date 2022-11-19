let casosTeste = parseInt(gets());

for (let i = 0; i < casosTeste; i++) {

    var s = gets().split(" ");

    let N = (s[0]);

    let K = (s[1]);

    var total = (N % K) + (N / K);

    print(Math.trunc(total));

}