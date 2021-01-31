var data = {
  name: "root",
  contents: [
    {
      name: "A",
      contents: [
        {
          name: "fileA1",
          contents: ["Hello!"]
        }
      ]
    },
    {
      name: "B",
      contents: [
        {
          name: "dirB1",
          contents: [
            {
              name: "fileB1.1",
              contents: ["Hello!"]
            }
          ]
        }
      ]
    }
  ]
};


var result ="";
const konfinity=(object)=>
{
  result="";
  traverse(object);
  function traverse(object)
  {
    for(let key in object)
    {
      if(typeof(object[key])==='object')
      {
        traverse(object[key]);
      }
      else
      {
        result+=object[key]+'\n';
      }
    }
    return result;
  }
  return result;
}
module.exports = konfinity;
