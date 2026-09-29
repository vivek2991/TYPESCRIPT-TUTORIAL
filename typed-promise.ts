// function test1(){
//     setTimeout(() => {
//         console.log("Test 1");
//     }, 2000);
// }

// function test2(){
//     console.log("Test 2");
// }

// test1();
// test2();

function complexLogic(){
    return new Promise((resolved)=>{
        setTimeout(()=>{
            resolved("Result is Here")
        }, 2000)
    })
}
complexLogic().then((data)=>{
    console.log(data);
    test2();
})

function test2(){
    console.log("Test 2");
    
}