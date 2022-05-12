//*VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

/* let coins = [1, 2, 5];
let amount = 11; */

let coinCount = function(coins, amount) {
    const leastCoin = Array(amount +1).fill(Infinity);
    leastCoin[0] = 0; //count the number of coins +1 to infinity to see how many it taks to reach the amount

    for (let i = 1; i <= amount; i++){
        for(const coin of coins){
            if(i - coin >= 0){
                leastCoin[i] = Math.min(leastCoin[i], leastCoin[i - coin] + 1);
            }
        }   //take that and figure out the shortest path/least amount of coins it takes
    }
    return leastCoin[amount] === Infinity ? -1 : leastCoin[amount];
}

console.log(coinCount([1, 2, 5], 11))
console.log(coinCount([1, 2, 5, 10], 75))