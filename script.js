(function(){
  GetValue();
})();
function GetValue()
{
    const myarray= new Array("Winner !","Loser !","Loser !");
    document.getElementById("message1").innerHTML=myarray.splice(Math.floor(Math.random() * myarray.length),1);
    document.getElementById("message2").innerHTML= myarray.splice(Math.floor(Math.random() * myarray.length),1);
    document.getElementById("message3").innerHTML= myarray.splice(Math.floor(Math.random() * myarray.length),1);
}