/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARAANG MENGGUNAKAN BUILT IN FUNCTION APAPUN (HANYA PERLU MENGGUNAKAN LOOP DAN CONDITION)
*/
/*
1. membuat var yang berisi angka dan var berisi huruf dari soal
2. membuat var result, untuk menampilkan hasil
3. membuat looping untuk mengecek input sebuah angka atau bukan
4. membuat var dengan nilai false
5. membuat looping ke 2 untuk merubah nilai false menjadi true jika terdapat angka
6. jika nilai == false maka masukan input ke dalam result
7. jika nilai == true maka rubah angka menjadi huruf yang sudah ditentukan, lalu masukan ke dalam result
8. tampilkan result
*/
// function numberLetters (str) {
  // Code disini
  var str = 'd1m1tr1w4hy7d1p7tr4'
  
  var angka = '14370';
  var vokal = 'iaeuo';
  var result = '';

  for (let i = 0; i < str.length; i++) {
    var cek = false;
    for (var j = 0; j < angka.length; j++) {
      if (str[i] === angka[j]) {
        cek = true;
        break;
      }
    }
    if (cek === true) {
      result += vokal[j];
    }
    else {
      result += str[i];
    }
  }
  console.log(result)
//   return result;
// }

// // Test cases
// console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
// console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
// console.log(numberLetters('j1nk4z4m4')); // jinkazama
// console.log(numberLetters('s7m3t4l')); // sumetal
// console.log(numberLetters('m04m3t4l')); // moametal
// console.log(numberLetters('')); //
