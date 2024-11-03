const numbers = [1, 2, 2, 3, 3, 4, 5, 5,];

const frequencyMap = new Map();

for (const number of numbers) {
    frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
}

const uniqueElements = new Set();

for (const [key, value] of frequencyMap.entries()) {
    if (value === 1) {
        uniqueElements.add(key);
    }
}

if (uniqueElements.size > 0) {
    console.log("Ada =", Array.from(uniqueElements));
} else {
    console.log("Tidak ada = []");
}