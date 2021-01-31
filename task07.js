var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  }
];
const konfinity =(object) =>{
    var len=Object(object).length;
    var result=0;
    for (var i=0;i<len;i++){
        if(object[i].isForceUser === true){
            result=result+object[i].pilotingScore+object[i].shootingScore;
        }

    }
    return result;



}
module.exports=konfinity;
