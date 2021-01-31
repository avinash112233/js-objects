function konfinity(object,countryName,capital,population){
    var arr=[];
    object.data.continents.europe.countries[countryName]={capital:capital,population:population};
    arr=Object.values(object.data.continents.europe.countries);
   
    return arr.pop();



}
var nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 38000000
          }
        }
      }
    },
    languages: {
      spanish: {
        hello: "Hola"
      },
      french: {
        hello: "Bonjour"
      }
    }
  }
};

module.exports=konfinity;
