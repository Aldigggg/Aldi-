const numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3];

const frequencyMap = {};

for (const num of numbers) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
}

console.log(frequencyMap);