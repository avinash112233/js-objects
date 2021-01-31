const choclate =(object) =>{
    var newvar=Object.values(object.innerData.snacks);
    var result=newvar[1].itemName;
    return result;



}
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: [
      { item: "chips", cost: 20 },
      { itemName: "chocolate", cost: 40 },
      { itemName: "fruits", cost: 80 }
    ],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13]
    }
  }
};


module.exports=choclate;
