function konfinity(pattern){
    var obj=
    {
        pyramid:function(n,p)
        {
            var arr = "";
            for (var i = 0; i < n; i++)
             {
             var str = "";
             for (var j = 1; j < n - i; j++) 
             {
              str = str + " ";
             }
            for (var k = 1; k <= 2 * i + 1; k++)
             {
             str = str + p;
              }
                arr += str;
                 arr += "\n";
        }
        return arr;
     },
        diamond:function(n,p)
        {
            var space = n - 1;
            arr = "";
            for (var i = 0; i < n; i++) {
            for (var j = 0; j < space; j++) arr += " ";
            for (j = 0; j <= i; j++) arr += p + " ";
            arr += "\n";
            space--;
            }
                space = 0;
            for (i = n; i > 0; i--) {
            for (j = 0; j < space; j++) arr += " ";
            for (j = 0; j < i; j++) arr += p + " ";
            arr += "\n";
            space++;
             }
            return arr;
        }
    }
    return obj;





}module.exports=konfinity;
