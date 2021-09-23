//variabler
var klokke = document.getElementById("klokke");

//program
Time()

//funksjoner
function Time(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "";

    if(hour >= 12){
        period = "PM";
    }
    else{
        period = "AM";
    }
    if(hour == 0){
        hour = 12;
    }
    else if(hour > 12){
        hour = hour - 12;
    }

    //ekstra null i tida lavere enn 10
        hour = extraNull(hour);
        minute = extraNull(minute);
        second = extraNull(second);

//skriver ut klokka
        klokke.innerHTML = `${hour}:${minute}:${second} ${period}`;
        setTimeout(Time, 1000);
}
//Ekstra null i minutter hvis lavere enn 10
function extraNull(t){
    if(t < 10){
        return "0" + t;
    }
    else{
        return t;
    }
}