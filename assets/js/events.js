$(document).ready(function(){
    $("#bars").click(function(){
        $(".header .container_menu").toggleClass("show");
    });

    $("#contact_li").click(function(){
        $(".header .contact_container").toggleClass("show_contact");
    });
    
    $("#close_contact").click(function(){
        $(".header .contact_container").removeClass("show_contact");
    });
});