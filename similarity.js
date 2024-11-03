const array1 = [7, 8, 9];
const array2 = [7, 9, 10, 11];

const set1 = new Set(array1);

const commonElements = [];

for (const num of array2) {
    if (set1.has(num)) {
        commonElements.push(num);
    }
}

console.log(commonElements);