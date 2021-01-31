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

 const task =(object) =>{

     var len=Object(object).length;
     
     var arr=[];
     for(var i=0;i<len;i++){
         arr.push(object[i].title);
     }
     return arr;

 }
 module.exports=task;
