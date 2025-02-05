/* 
    var dia bisa di akses di luar scopes
    dan juga bisa di akses di dalam scope juga
    yang berarti bisa di akses dimana saja
        nilai nya bisa di ganti
*/
// if(true){
//     var nama="kirito"
// } //scope   

// console.log('var :',nama)


/* 
    let dia tidak bisa di akses di luar scopes (global scope)
    dan hanya bisa di akses di dalam scopes (local scope)
        nilai nya bisa di ubah
*/
    // if(true){
    //     let name = "Nanta";
    //     name = "dapin"
    //     console.log('let :',name);
    // }
    


/* 
    const dia tidak bisa di akses di luar scopes (global scope)
    dan hanya bisa di akses di dalam scopes (local scope)
        nilai nya tidak bisa di ubah
*/
    
    if(true){
        const name = "tono"
        console.log('const :',name)
    } 