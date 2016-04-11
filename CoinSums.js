/*In England the currency is made up of pound, £, and pence, p, and there are
eight coins in general circulation:

1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)
Given a given number of pence, return the possible number of ways someone could
make change.

It is possible to make 5 pence in the following ways:
5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p
In other words, find all the possible combinations of coins that sum to a given
pence value.
*/

let coinSums = (total) => {
  let coinPerm = 0;
  let coinSelect = [];
  for(value in coins) {
    if(total >= coins[value]) {
      coinSelect.push(coins[value]);
    } else {
      break;
    }
  }

  let recurse = (currValue, coin) => {
    if(currValue === total) {
      coinPerm++;
      return;
    }

    if(currValue < total) {
      for(coinIndex in coinSelect) {
        if(coinIndex >= coin) {
          coin = coinIndex;
          let coinsVar = coinSelect[coinIndex];
          recurse(coinsVar+currValue, coin);
        }
      }
    }
  }

  recurse(0, 0);
  return coinPerm;
}
let coinSums = (total) => {
  let coinPerm = 0;
  let coinSelect = [];
  for(value in coins) {
    if(total >= coins[value]) {
      coinSelect.push(coins[value]);
    } else {
      break;
    }
  }

  let recurse = (currValue, coin) => {
    if(currValue === total) {
      coinPerm++;
      return;
    }

    if(currValue < total) {
      for(coinIndex in coinSelect) {
        if(coinIndex >= coin) {
          coin = coinIndex;
          let coinsVar = coinSelect[coinIndex];
          recurse(coinsVar+currValue, coin);
        }
      }
    }
  }

  recurse(0, 0);
  return coinPerm;
}
