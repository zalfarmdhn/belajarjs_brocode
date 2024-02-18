let count = 0;

function cc(card) {
    // Only change code below this line

    if (card === 2 || card === 3 || card === 4) {
        count += 1;
    } else if (card === 5 || card === 6) {
        count += 1;
    } else if (card === 10 || card === 'J' || card === 'Q') {
        count -= 1;
    } else if (card === 'K' || card === 'A') {
        count -= 1;
    }

    if (count <= 0) {
        return currentCount = `${count} Hold`;
    } else if (count >= 1) {
        return currentCount = `${count} Bet`;
    }
    // Only change code above this line
}

cc(2); cc('J'); cc(9); cc(2); cc(7);

console.log(currentCount);