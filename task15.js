function konfinity(arg){
     if( arg===null || typeof(arg)==='number' || typeof(arg)==='string' || typeof(arg)==='boolean' )
    {
        return false;
    }
    if((typeof(arg)==='object' && Array.isArray(arg)===false))
    {
        return true;
    }
    else
    {
        return true;
    }



}
module.exports=konfinity
