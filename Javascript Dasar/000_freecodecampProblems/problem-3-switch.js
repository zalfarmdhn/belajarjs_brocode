let count = 0;

function cc(card) {
    // Only change code below this line
    // Card 
    // 2,3,4,5,6 = +1
    // 7,8,9 = 0
    // 10, J, Q, K, A = -1

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--
            break;
    }

    if (count <= 0) {
        return currentCount = `${count} Hold`;
    } else {
        return currentCount = `${count} Bet`;
    }

    // Only change code above this line
}

cc(2); cc('J'); cc(9); cc(2); cc(7);

console.log(currentCount);