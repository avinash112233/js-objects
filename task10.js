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
    title: ["BMW", [{ id: 01, name: "R8" }, { id: 02, name: "r7" }], "maruti"],
    isDone: true
  }
];
function task(object)
{
        var len=Object(object).length;
        for(var i=0;i<len;i++)
        {
           if(i === 2)
           {
               var arr=Object.values(object[i].title);
               var arr1=arr[1];
               for (var j=0;j<arr1.length;j++)
               {
                   if(arr1[j].id === 01)
                   {
                       var result=arr1[j].name;
                   }
                  
               }
                return result;
           }
        }


}
module.exports=task;
