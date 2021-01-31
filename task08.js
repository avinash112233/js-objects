var obj = [
  {
    title: "buy meal",
    isDone: false
  },
  {
    title: "come office on time",
    isDone: false
  },
  {
    title: ["BMW", "Mercedez", "maruti"],
    isDone: true
  }
];
const task08=(object) =>{
    
    var len=Object(object).length;
    for (var i=0;i<len;i++){
        if(object[i].isDone === true){
            var result=object[i].title;
        }
    }
    return result;

}
module.exports=task08;
