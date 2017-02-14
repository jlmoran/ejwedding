$(document).ready(function() {
var Invite = getParameterByName('name');

request = $.ajax({
 url: "https://script.google.com/macros/s/AKfycbzp0RZM4sPzjO-yymVA46wr-Ycj8aCiKF8c-z2GCWITJmROa40/exec", 
        type: "GET",
        data: {name:Invite}
    
    })

.done(function(invitereturn){
    console.log (invitereturn)
})
    
   document.getElementById("Invitees").innerHTML = Invite;
   document.getElementById("name").value = Invite;
})