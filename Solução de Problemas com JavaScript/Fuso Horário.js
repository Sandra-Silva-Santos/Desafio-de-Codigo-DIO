const input = gets();
const [S, T, F] = input.split(' ').map(value => parseInt(value));
const mobileTimeZone = (departure, travelTime, timeZone) => {
    if (departure === 0) {
        departure = 24;
    }
    let arrival = departure + travelTime + timeZone;
    if (arrival > 24) {
        arrival -= 24;
    } else if (arrival < 0) {
        arrival += 24;
    }
    return arrival;


};

print(mobileTimeZone(S, T, F));