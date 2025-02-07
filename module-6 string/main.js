        //Strings di Js

    //Membuat strings
let singleqoute = 'hai'
let doublequote = "world"
let backtics    = `hello world`

    //Mengakses karakter dari dalam string
let str ='Javascript'
console.log(str[4]) //maka output nya s

    //Properti dan methods di dalam string
console.log(str.length) //maka output nya 10
                // karena panjang dari karakter nya 10

console.log(str.toUpperCase()) //maka outputnya JAVASCRIPT (uppercase semua)
                // mengubah teks menjadi uppercase

console.log(str.toLowerCase()) //maka output nya javascript (lowercase semua)
                // mengubah teks menjadi lowercase

let testTrim = '     javascript trim    '
console.log([testTrim.trim()],typeof testTrim)//yang awal outpunya (   javascirpt trim    ) yang dimana masih ada spasi
        // jika kita beri sebuah method trim maka akan menghilangkan spasi tersebut
        // trim hanya menghilang kan spasi awal & akhir saja, jika di antara dua kata masih tetap ada

        //Manipulasi string

    //concat
let firstN = "Jananta"
let lastN = 'dhafine'
let NameL = firstN + " " + lastN
console.log(NameL) //sudah benar tapi terlalu ribet

    //concat template literals
let NameLBactics = `${firstN} ${lastN}`
console.log([NameLBactics]) //mempercepat cara dengan bactics

    //mengambil bagian dari string
let text = "Javascript"
console.log(text.slice(0,4)) //membutuhkan dua parameter
        //maka outout nya Java
        //yang dimana mengambil nilai di dalam dengan dua parameter
        //yg berfungsi untuk mengambil nilai di dalam nya 
console.log(text.substring(4)) //mengambil nilai mulai dari parameter yg kita beri
        //maka output nya script
        //yang di mana kalimat script berada pada nilai ke 4 yaitu S 
        //Java yang bernilai sebelum 4 tidak akan terambil