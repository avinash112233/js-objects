function mine(object){
        var arr=[];
        var len=Object.values(object.types.numberData.primeNumbers).length;
        for(var i=0;i<len;i++){
            arr.push(object.types.numberData.primeNumbers[i]);
        }
        return arr;


}
var obj = {
  types: {
    binary: [],
    decimal: [],
    numberData: {
        primeNumbers: [1,2,3,4,5],
        fibonnaci: []
    }
   
  }
}
module.exports=mine;
