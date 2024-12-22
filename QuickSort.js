// Fungsi untuk melakukan quick sort
function quickSort(array) {
    // Jika panjang array <= 1, array sudah terurut
    if (array.length <= 1) {
        return array;
    }

    // Memilih elemen pivot (biasanya elemen terakhir)
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    // Membagi array ke kiri (lebih kecil dari pivot) dan kanan (lebih besar dari pivot)
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // Rekursi untuk bagian kiri dan kanan, lalu gabungkan hasil
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Contoh penggunaan
const array = [10, 7, 8, 9, 1, 5];
console.log("Array sebelum disortir:", array);

const sortedArray = quickSort(array);
console.log("Array setelah disortir:", sortedArray);
