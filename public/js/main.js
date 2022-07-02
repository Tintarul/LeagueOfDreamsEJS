function HideFriendList(){
    document.getElementById("friendlist").style.display="none";
}

function ShowFriendList(){
    if(document.getElementById("friendlist").style.display == "none"){
        HideMessages();
        HideAlerts();
        document.getElementById("friendlist").style.display="block";
    } else {
        HideFriendList();
    }
}

function HideMessages(){
    document.getElementById("messagelist").style.display="none";
}

function ShowMessages(){
    if(document.getElementById("messagelist").style.display == "none"){
        HideFriendList();
        HideAlerts();
        document.getElementById("messagelist").style.display="block";
    } else {
        HideMessages();
    }
}

function HideAlerts(){
    document.getElementById("alertlist").style.display="none";
}

function ShowAlerts(){
    if(document.getElementById("alertlist").style.display == "none"){
        HideMessages();
        HideFriendList();
        document.getElementById("alertlist").style.display="block";
    } else {
        HideAlerts();
    }
}

function LogOut(){
    window.location.href = '/logout';
}

function News(){
    if(document.getElementById("NewsContent").style.display == "none"){
        document.getElementById("NewsContent").style.display="block";
		document.getElementById("LobbyContent").style.display="none";
		document.getElementById("ProfileContent").style.display="none";
    } else {
        document.getElementById("NewsContent").style.display="none";
    }
}

function JoinLobby(id){
	console.log(id);
	window.location.href = '/lobby/' + id;
}

function goHome(){
	window.location.href = '/';
}

function Profile(){
    if(document.getElementById("ProfileContent").style.display == "none"){
        document.getElementById("ProfileContent").style.display="block";
		document.getElementById("LobbyContent").style.display="none";
		document.getElementById("NewsContent").style.display="none";
    } else {
        document.getElementById("ProfileContent").style.display="none";
    }
}

function Play(){
    if(document.getElementById("LobbyContent").style.display == "none"){
        document.getElementById("LobbyContent").style.display="block";
		document.getElementById("ProfileContent").style.display="none";
		document.getElementById("NewsContent").style.display="none";
    } else {
        document.getElementById("LobbyContent").style.display="none";
    }
}