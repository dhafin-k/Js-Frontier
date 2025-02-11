
        //Numbers

//contoh pemggunaan Numbers
let BilanganBulat = 26 //outputnya 26 | untuk bilangan bulat
let bilanganpecahan = 27.5 //outputnya 27.5 | untuk bilangan pecahan
let bilangannegatif = -5  // outputnya -5 | untuk bilangan negatif,jangan di beri spasi untuk - lebh baik 'tanpa' spasi(- 5) jangan seperti ini
let infinityValue = -Infinity //bisa juga di beri - yang dimana infinity minus,normalnya posiitive
let notnumbers = NaN //outputnya NaN | Not an numbers
console.log(notnumbers)

//Number.Max_Value
console.log(Number.MAX_VALUE)

//Number.Min_Value
console.log(Number.MIN_VALUE)

//Number.Positive_Infinity
console.log(Number.POSITIVE_INFINITY)

//Number.Negative_Infinity
console.log(Number.NEGATIVE_INFINITY)

//Number.NaN
console.log(0/0) //outputnya NaN
console.log("abc"/0)//outputnya juga Nan

    //Metode Bawaan Numbers
// 1.tostring(), mengubah 'angka menjadi String'
let num = 385.8
let str = num.toString()
console.log(str,typeof str) //maka outputnya 385.8 string

// 2.toFixed(digits), mengubah 'angka menjadi string' 
// dengan jumlah digit desimal yang di tentukan
let floating = 3.2349289
console.log(floating.toFixed(3)) //maka outputnya 3 |karena di ubah menjadi desimal
            // jika di dalam kurung kita beri angka,contoh 3 maka outputnya 3.234
            // karena sistem akan mengambil 3 angka dari kiri

// 3.toPrecision(digits), 'mengubah angka menjadi string'
// dengan panjang total yang di tentukan
let float = 3.183567
console.log(float.toPrecision(3)) // maka outputnya 3.18

// 4.parseInt() dan parseFloat(), mengubah 'string menjadi angka integer atau floating point'
let usb = "123.8"
let int = parseInt(usb)
console.log(int,typeof int) //maka outputnya 123 bertipe number (decimal)
            //karena variable kita ubah yg awal string menjadi number 
            //menggunakan parseInt(nama-variable)
let int2 = parseFloat(usb)
console.log(int2) //maka outputnya 123.3 bertipe number (pecahan)
            //jika kita ingin menampilkan bagian dari belakang titik(.)
            //maka gunakan parseFloat karna menampilkan utuh seluruh nilai yang ada