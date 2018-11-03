/*
==================================
Array Mastery: Second Largest
==================================
Nama:________
[INSTRUKSI]
Function secondLargest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
secondLargest akan mengembalikan angka yang kedua terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 4

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/

/*
1. buat var largest dengan nilai numbers[0]
2. buat looping ke 1 untuk menentukan nilai terbesar
3. jika nilai numbers[i] > largest, maka nilai largest diganti dengan nilai numbers[i]
4. buat looping ke 2 untuk menghapus nilai terbesar dari numbers
5. mendeklarasikan nilai largest dengan numbers[0]
6. buat looping ke 3 untuk menentukan nilai terbesar ke 2
7. tampilkan nilai terbesar ke 2
*/

// function secondLargest(numbers) {
//   // Code here
//   var largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//     }
//   }
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === largest) {
//       numbers.splice(i, 1);
//     }
//   }
//   largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//     }
//   }
//   return largest;
// }

//CARA ANHAR
// function secondLargest(numbers) {
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//       var largest = 0;
//       if (numbers[j] < numbers[j + 1]) {
//         largest = numbers[j+1];
//         numbers[j+1] = numbers[j];
//         numbers[j] = largest;
//       }
//     }
//   }
//   return numbers[1];
// }

//CARA LAIN
// function secondLargest(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i+1; j < numbers.length; j++) {
//       if (numbers[i] < numbers[j]) {
//         var largest = numbers[j];
//         numbers[j] = numbers[i];
//         numbers[i] = largest;
//       }
//     }
//   }
//   return numbers[1];
// }

//CARA LAIN
function secondLargest(numbers) {
  var largest = numbers[0];
    var max2 = numbers[1];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
 
      }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < largest && numbers[i] > max2) {
            max2 = numbers[i]
        }
    }
    return max2;
}
// TEST CASES
console.log(secondLargest([5, 2, 1, 4])); // 4
console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest([15, 32, 11, 14])); // 15
console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest([123, 321, 143, 313])); // 313