function fib(object){
    var arr=[];
    var len=Object.values(object.innerData.numberData.fibonnaci).length;
    for(var i=0;i<len;i++){
        if(object.innerData.numberData.fibonnaci[i]%2 == 0){
            arr.push(object.innerData.numberData.fibonnaci[i]);
        }
    }
    return arr;

}
var nestedData = {
  innerData: {
    order: [],
    snacks: [],
    numberData: {
        primeNumbers: [],
        fibonnaci: [1,1,2,3,5,8,13,21,54,75]
    },
    
  }
}


module.exports=fib;
