function updatedSum(target:any,key:string,descriptor:PropertyDescriptor){
    descriptor.value = function sum(x:number, y:number){
        let output = x+y;
        return "The Output of x + y: " + output;
    }
}

class CustomMaths1{

    @updatedSum
    sum(x:number, y:number){
        return x+y;
    }
}

var cm1 = new CustomMaths1();
console.log((cm1.sum(10,20)));
