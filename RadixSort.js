// Fungsi untuk mendapatkan digit tertentu dari angka
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Fungsi untuk menghitung jumlah digit dalam angka
function digitCount(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Fungsi untuk mendapatkan jumlah digit maksimum dalam array
function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

// Fungsi untuk melakukan radix sort
function radixSort(array) {
    const maxDigitCount = mostDigits(array); // Cari digit maksimum
    for (let k = 0; k < maxDigitCount; k++) {
        // Membuat bucket untuk setiap digit (0-9)
        let digitBuckets = Array.from({ length: 10 }, () => []);

        // Memasukkan angka ke dalam bucket sesuai digit ke-k
        for (let num of array) {
            const digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }

        // Menggabungkan kembali angka dari bucket
        array = [].concat(...digitBuckets);
    }
    return array;
}

// Contoh penggunaan
const array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Array sebelum disortir:", array);

const sortedArray = radixSort(array);
console.log("Array setelah disortir:", sortedArray);
