$(document).ready(function() {
    $(".custom-card").click(function() {
        var win = window.open($(this).data("location"))
        win.focus()
    })
})