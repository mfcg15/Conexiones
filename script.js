
const userName = document.getElementById("userName");
const connectionUsers = document.querySelectorAll("#connections .card-list-item");
const textConnections = document.querySelectorAll(".badge");
var contadores = [2,418];

function ChangeNameUser()
{
    userName.innerText = "Jade Dickson";
}

function AccionUser(indice,estado)
{
    contadores[0]--;
    connectionUsers[indice].remove();
    textConnections[0].innerText = contadores[0];
    IncreseConnections(estado);
}

function IncreseConnections(estado)
{
    if(estado)
    {
        contadores[1]++;
        textConnections[1].innerText = contadores[1];
    }
}