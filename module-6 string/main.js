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

console.log(str.toUpperCase()) //maka outputnya JAVASCRIPT (Uppercase semua)
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
    
    //mengganti  bagian dari string
let replacement = 'hello, world'
let newreplace = replacement.replace('world', 'Jawa')
console.log(newreplace)

const arr = ['test','array','di','string']
console.log(arr.join(' ')) //mengubah array menjadi string menggunakan join()
                // jika di dalam tanda kurung di beri suatu object/nilai lain
                // contoh join('-') maka output nya text-array-di-string
                //jika join(' ') maka ourputnya text array di string
                //yang di mana akan memanipulasi bagian sapsi di setiap kata 

const testString = 'test-string-di-array'
console.log(testString.split())
                // jika di dalam tanda kurung di beri suatu object/nilai lain
                // contoh join('-') maka output nya text-array-di-string
                //jika join(' ') maka ourputnya text array di string
                //yang di mana akan memanipulasi bagian sapsi di setiap kata

        //Pencarian di dalam string
    //indexOf
let index = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum deserunt quaerat quas placeat ducimus fugit ut quasi ex architecto!"
let endChat = index.indexOf("sit")
console.log(endChat) //maka outputnya 18,karena sit berada di index 18

let lastIndex = index.lastIndexOf("dolor")
console.log(lastIndex) //maka outputnya 12 karena index nya berada pada index ke 12
            //jika ada dua kata yang sama, maka yang di ambil akan kata paling belakang 
            //jadi menghitung index dari 0 sampai pada kata yang di tuju 

let exist = index.includes("dolor")
console.log(exist) //maka output nya true
        //fungsi dari includes sendiri untuk mengcek apakah nilai yang kita sebut ada
            //atau tidak ada,contoh disini bernilai huruf yang mencari nilai dolor
            //karna ada maka hasil nya true, jika tidak ada maka akan false