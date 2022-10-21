function openNav() {
    console.log($("#mySidenav").outerWidth());
    if ($("#mySidenav").width() == "250") {
        closeNav();
    } else {
        $("#mySidenav").width("250px");
        $("#main").css("margin-left", "250px");
    }
}
function closeNav() {
    $("#mySidenav").width("0px");
    $("#main").css("margin-left", "0px");
}
$(document).ready(function(){
    $('#singers h3').click(function(){
        $(this).next().slideToggle(500)
        $('#singers div').not($(this).next()).slideUp(500)
    })
})

function timeDown(){
    let now =new Date();
    let eventDate =new Date(2022,12,17);
    let currentTime =now.getTime();
    let eventTime =eventDate.getTime();
    let remTime = eventTime - currentTime;

    let s =Math.floor(remTime / 1000);
    let m =Math.floor(s / 60);
    let h =Math.floor(m / 60);
    let d =Math.floor(h / 24) -30;
    h%=24;
    m%=60;
    s%=60;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(timeDown, 1000);
}
timeDown();


$('textarea').keyup(function(){
    console.log("hii");
    let max =100;
    let length = $(this).val().length;
    console.log(length);
    let total =max-length;
    console.log(total);
    if(total<=0){
        $("#char").text("your available character finished");
    }
    else{
        $("#char").text(total);
    }
})