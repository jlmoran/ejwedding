$(document).ready(function() {
$('[id^=Acc]').collapse({toggle: false});
$('[id^=Acc]').click(function() {
    $('[id^=Acc]').collapse("toggle");
});
});