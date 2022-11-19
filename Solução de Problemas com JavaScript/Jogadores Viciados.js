let entrada = gets().split(" ");
let number, id;
number = parseInt(entrada[0]);
id = parseInt(entrada[1]);
let count = 0;
while (number > 0) {

    let input = gets().split(" ");
    let id1, num;

    id1 = parseInt(input[0]);
    num = parseInt(input[1]);

    if (id === id1 && num === 0) {
        count++;
    }

    number--;
}
print(count);