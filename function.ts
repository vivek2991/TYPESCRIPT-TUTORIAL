function fruits(){
    return "Apple";
}

function fruits1():string{
    return "Banana";
}

function fruitsPrice():number{
    return 10;
}

function complex():number|string{
    let data = 10
    let type = "age"
    let name = 'Sm'

    if(type=='age'){
        return data
    } else {
        return name
    }
}