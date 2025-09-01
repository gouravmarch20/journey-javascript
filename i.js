// Extend Array prototype to add groupBy method
Array.prototype.groupBy = function (keySelector) {
  // If the array itself is null or undefined, return empty object
  if (this == null || !Array.isArray(this) || this.length === 0) {
    return {};
  }

  // Use reduce to build the grouping object
  return this.reduce((groups, item) => {
    // If item is null or undefined, use 'null' as the group key
    const key = item == null ? 'null' : keySelector(item);

    // If this group doesn't exist yet, initialize with an empty array
    if (!groups.hasOwnProperty(key)) {
      groups[key] = [];
    }

    // Add the item to its group
    groups[key].push(item);

    return groups;
  }, {});
};

// Example usage

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Group by even/odd
const groupsByEvenOdd = numbers.groupBy(x => x % 2 === 0 ? 'Even' : 'Odd');
console.log(groupsByEvenOdd);
// { Even: [ 2, 4, 6, 8 ], Odd: [ 1, 3, 5, 7, 9 ] }

// Group by first digit
const groupsByFirstDigit = numbers.groupBy(x => String(x)[0]);
console.log(groupsByFirstDigit);
// { '1': [ 1 ], '2': [ 2 ], '3': [ 3 ], '4': [ 4 ], '5': [ 5 ], '6': [ 6 ], '7': [ 7 ], '8': [ 8 ], '9': [ 9 ] }

// Test with null values
const mixedArray = [1, null, 2, undefined, 1];
const groupsWithNulls = mixedArray.groupBy(x => (x != null ? x : 'null'));
console.log(groupsWithNulls);
// { '1': [1, 1], '2': [2], null: [null, undefined] }
