// break = breaks out of loop entirely
// continue = skip an iteration of a loop

for (let i = 1; i <= 10; i += 1) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

// Output :
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// Explanation :
// 5 is skipped

for (let j = 1; j <= 10; j += 1) {
    if (j == 5) {
        break;
    }
    console.log(j);
}

// Output :
// 1
// 2
// 3
// 4

// Explanation
// stops exactly at 5.