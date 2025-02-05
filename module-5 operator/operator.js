
    // Comparison Operator

// == mengecek persamaan nilai
let a = "5"
let b = 5

console.log(a == b) //maka output nya true, karena nilai nya sama sama 5
                    //sebalik nya jika nilai nya beda maka akan false

// === mengecek persamaan nilai dan tipe data
let c = "5" //string
let d = 5 //number

console.log(c === d) //maka output nya false, karena tipe data ya berbeda tetapi nilai nya sama
                //sebalik nya jika nilai dan tipe datanya sama maka akan true

// != mengecek ketidaksamaan nilai dari variable

let e = "5" //string
let f = 5 //number

console.log(e != f,typeof e) //maka outputnya false, karena yang di cek ketidak samaan
                //yang di mana jika nilai nya sama maka false,jika nilainya berbeda maka

// !== mengecek nilai dan tipe data variable
let g = "5"
let h = 5

console.log(g !== h) //maka output nya true,walau nilai nya sama tetapi tipe data nya beda
                    //jika tipe data dan nilai nya berbeda maka hasilnya false

// > mengecek variable satu lebih besar dari variable lainnya
let i = 7
let j = 5
//Apakah i lebih besar dari j?
console.log(i > j,typeof i) //maka outputnya true,karena nilai i lebih besar dari j
                            //jika nilai nya sama maka nilai nya masih false 
                            //karena tidak melebihi j

// >= mengecek variable satu lebih besar atau sama dari variable lainnya
let k = 7
let l = 5
//apakah k lebih besar dari l? minimal sama
console.log(k >= l) //maka output nya true, selain nilai k lebih besar,
                    //walau nilai nya sama hasil akan true

// < mengecek variable satu lebih kecil dari variable lainnya
let m = 4
let n = 5
//Apakah m lebih kecil dari n?
console.log(m < n,typeof n) //maka outputnya true,karena nilai m lebih kecil dari n
                            //jika nilai nya sama maka nilai nya masih false 
                            //karena tidak kurang dari n

// <= mengecek variable satu lebih kecil atau sama dari variable lainnya
let o = 4
let p = 5
//apakah o lebih kecil dari p? minimal sama
console.log(o <= p) //maka output nya true, selain nilai o lebih kecil,
                    //walau nilai nya sama hasil akan true