    // Implicit conversion

// let result = '5' + 10
//5 adalah string, tetapi 10 adalah number maka hasilnya 510

let result = '5' - 10
// semua aritmatik jika di operasikan dengan number ( - * /) minus,kali,bagi
//  Maka akan menghasil kan Number, Kecuali ( + )
console.log(result, typeof result) 

    //Falsy value 
// contohnya: 0,null,undefined, ""(empty string)
let bool = !0 // jika di luar 0,null, undefined, ""  maka hasil nya akan false
// karna javascript sendiri yang mengubah tipe data kita karna operasi tertentu
console.log(bool,typeof bool)

    //Eksplicit Conversion

let num = 100

// let str = String(num) // cara 1
let str = num.toString // cara 2
console.log(str, typeof str) // mengubah Numb to string

let str2 = "200.990"
// let num2 = parseInt(str2) //mengubah string menjadi interger yang dimana nilai integer akan membulatkan nilai nya
let num2 = parseFloat(str2) // maka nilai yang aka di simpan akan utuh
console.log(num2, typeof num2) 