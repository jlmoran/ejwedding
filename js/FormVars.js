$(document).ready(function() {
var Invite = getParameterByName('name');

request = $.ajax({
 url: "https://script.google.com/macros/s/AKfycbw8guOocngFA2qeneXw8WHD6LPwP59c5cb5INfNZLaXktfSruHD/exec", 
        type: "get",
        data: {name:Invite}
    
    })

.done(function(invitereturn){
    console.log (invitereturn)
})
    
   document.getElementById("Invitees").innerHTML = Invite;
   document.getElementById("name").value = Invite;
})