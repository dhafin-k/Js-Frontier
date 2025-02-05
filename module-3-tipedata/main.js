        /* Tipe data primitif */

    //String
const nama = "tono"
const negara ='indonesia'
const domisili = `${nama} Jawa timur`

    // Number
const Nomer = 87.3

    //Boolean
const isMarried = true

    //Undefined
let x;

    //null
const person = null

    //Symbol
const symbol1 = Symbol("description 1")

    // Bigint
const Bigint = 123456789387654n 

    /* Tipe data Reference */

//object 
const orang = {
    nama: "nanta",
    umur: 16,
    negara: "indonesia",
}


//Array
const hobby =["basket","Reading","gaming"]


//Fucntion
function SayHi(){
    return "hai njerrrrrrrrr"
}

const output = SayHi
console.log(output, typeof output)


        /*  Perbedaan tipe data primitive dan reference  */

    //Primitif
    let a = 10
    let b = a //karna 'b' menyimpan nilai salinan dari a , b = 10

    a = 20 // a bawah yang di kami maksud

    console.log(b) //output nya 10, {hasil bisa 20 jika kode b ada di bawah a}
        // karna cara baca code nya atas ke bawah jadi bagian a(bawah) tidak terbaca karna pergantian nilai a berada di bawah b 

    //Reference
    let obj1 = {nama: "nanta"}
    let obj2 = obj1 //obj2 akan menyimpan referensi yang sama dgn obj1 ,dan tidak menyimpan salinan

    obj1.nama = "Jamal"
    console.log(obj2)