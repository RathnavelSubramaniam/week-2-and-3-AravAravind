var scottishCity = ["Glasgow"];
var americanCity = scottishCity;
americanCity [0]= 'New ' + americanCity
//////////////////////////
//uncomment the next lines one at a time to check your results in the browser console
console.log(scottishCity)
console.log(americanCity)
 
/////////////////////////
//don't change the code under this line
if (typeof module !== 'undefined') {
    module.exports = {scottishCity, americanCity};
}