var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" }
];
const konfinity = (object)=>
{
    
    var arr1 = [];
    var arr2 = [];
    var len = object.length;
    for(var i =0;i<len;i++)
    {
        if(object[i].id===0)
        {
            arr2.push(object[i]);
        }
        else if(object[i].id=={})
        {
            arr2.push(object[i]);
        }
        else if(object[i].id==null)
        {
            arr2.push(object[i]);
        }
        else if(object[i].id==='undefined')
        {
            arr2.push(object[i]);
        }
        else if(Number.isNaN(object[i].id))
        {
            arr2.push(object[i]);
        }
        else
        {
            arr1.push(object[i]);
       }
    }
    var len2 = arr2.length;
    
    var obj ={
        prop1 : arr1,
        prop2 : len2,
    };
    return obj;
}
module.exports = konfinity;
