/*
Create a web page that prints all of the lyrics to '99 bottles of beer' https://www.songfacts.com/lyrics/traditional/99-bottles-of-beer 
@author Hung Nguyen
*/

function activate(){
    let output = '';
    
    for(let i=99;i>=0;i--){
        if(i>2){
            output += i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, "+(i-1) +" bottles of beer on the wall" +"<br>";
        }
        else if(i==2){
            output += i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, "+(i-1) +" bottle of beer on the wall"+"<br>";
        }
        else if(i==1){
            output += i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall"+"<br>";
        }
        else{
            output += "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, "+ (i+99) +" bottles of beer on the wall";
        }
    }
    document.getElementById("message").innerHTML = output;
}