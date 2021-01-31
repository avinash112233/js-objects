var library = [
    {
        title: "what is this",
        author: "avi",
        readingStatus:true,
    },
    {
        title:"what is what" ,
        author: "nash",
        readingStatus:false,
    },
    ];
    function konfinity(object){
        var arr1=[];
        var arr2=[];
        var len=object.length;
        for(var i=0;i<len;i++){
            if(object[i].readingStatus == true){
                arr1.push(object[i]);
            }
            else{
                arr2.push(object[i]);
            }
        }
            var obj = {
                prop1:arr1,
                prop2:arr2,
            }

          return obj;



    }
    module.exports=konfinity;
