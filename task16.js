var count=0;
var level;
const konfinity = (object)=>
{
    var step=object.steps;
    var abl=Object.values(object.ability);
    count=0;
    
    countStep(step,abl);
    function countStep(step,abl)
    {
        if(step===0)
        {
            count++;
           
        }
        for(var i=0;i<abl.length;i++)
        {
            level=step-abl[i];
            if(!(level<0))
            {
                countStep(level,abl);
            }
        }
        return count;
    }
return count;
}
module.exports = konfinity;
