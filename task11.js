var recipe = {
  title: "mole",
  servings: [2, 5, 7, 9, 7, 9, 6, 5, 4, 4],
  ingredients: ["cumin", "cinnamon", "cocoa"]
};
function task(object){
   
    var res = [];
    var count;
    var arr = object.servings;
    for(var i =0;i<arr.length;i++)
    {
        count=0;
        for(var j =i+1;j<arr.length;j++)
        {
            if(arr[i]===arr[j])
            {
                count++;
            }
        }
       if(count>0)
       {
           count =0;
           for(var j=0;j<res.length;j++)
           {
            if(arr[i]==res[j])
            {
                count++;
            }
           }
           if(count==0)
           {res.push(arr[i]);}
       }
    }
   
    return res;

}
module.exports=task;
