// This is a JavaScript file
// Funktion Name speichern
function addUser()
{
    console.log('Start addUser xxx')
////Das von MONACA.io bereitgestellte Backup heißt: monaca.cloud
var mc = monaca.cloud;
////die von uns dort angelegte Collection "EmployeeDB_1" wird der Variable employee zugewiesen
 var db = mc.Collection("Team1Collection");

//Die durch die ID im Formular identifizierten Eingabefelder übergeben ihre Werte an Variablen
var skill = $("#faehigkeit").val();    
var user = $("#nutzer").val();
//var Feld3 = $("#Feld3").val();
//var Feld4 = $("#Feld4").val();
//Ein Eintrag für's Log
  console.log('Start Nspeichern');

//Jetzt wird ein Objekt mit zwei Feldern in unsere Collection geschrieben
  db.insert({"skill":skill, "user":user})  //alternativ: ({"Person": [{"F1":Feld1,"F2":Feld2}]})
  //Erfolgsfall
    .done(function()
    {
      console.log('Registration is success2!');
    })
  
  //Fehler
    .fail(function(err)
    {
      console.log(err.text);
      console.log('Registration failed2!');
    })
    
  //Meldung kommt immer
    .always(function()
    {
      console.log('Always2');
    })
    ;
}



//Funktion Name als Objekt lesen
function Nlesen2()
{
    console.log('Start Nlesen2');
    var employee = monaca.cloud.Collection("EmployeeDB_1");
    var such = $("#Suche").val();
    console.log(such);
    //such = such;
    // console.log('such: '+such);
    var Criteria = monaca.cloud.Criteria('F1 =='+such); //ohne Person: funktioniert es auch ;-)
    console.log(Criteria);
    
    employee.find(Criteria, "F1 DESC", {propertyNames: ["F1", "F2"], limit: 5})
    .done(function(result)
    {
        console.log('Rueckgabewert: ' + result.items[0].F2);
        data = result.items[0].F2;
        console.log('data: ' + data);
        document.getElementById("Ergebnis").innerHTML = data;
    })
    .fail(function(err)
    {
        console.log('Suche durchlaufen, Fehlerfall');
        data = "Kein Wert gefunden";
        document.getElementById("Ergebnis").innerHTML = data;
    });
    console.log('NLesen2 durchlaufen');
    
    data = "Suche... einen Moment bitte";
    document.getElementById("Ergebnis").innerHTML = data;
}




//Funktion wird beim Laden ausgeführt...
window.onload = function(){
    //und wartet darauf, dass das Element mit der ID "NameSpeichern" geklickt wird, um Nspeichern auszuführen
//document.getElementById("NameSpeichern").onclick = Nspeichern;
document.getElementById("save").onclick = addUser
document.getElementById("NameAusgeben").onclick = Nlesen2;  //Nlesen gegen Nlesen2 austauschen, jenachdem was der Button auslösen soll.
};


