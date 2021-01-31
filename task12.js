function fun(manipulation){
    var obj={
        up:function(manipulation){
            return manipulation.toUpperCase();
        },
        low:function(manipulation){
                return manipulation.toLowerCase();
        },
        len:function(manipulation){
            return manipulation.length;
        },
        sta:function(manipulation){
            return manipulation.split("");
        }





    }
    console.log(obj);
    return obj;

}
module.exports=fun;
