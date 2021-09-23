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

    $("#send_email_action").click(function(){
        let user_name = document.querySelector("#user_name").value
        let user_email = document.querySelector("#user_email").value
        let user_phone_number = document.querySelector("#user_phone_number").value
        let user_option = $("#user_option select").val()
        let user_option_text = $("#user_option select option:selected").text()
        if ((/\S/.test(user_name) && user_name!=null) && (/\S/.test(user_email) && user_email!=null) && (/\S/.test(user_phone_number) && user_phone_number!=null)) {
            console.log("nombre: ",user_name," email: ",user_email," phone_number: ",user_phone_number)
            console.log("opcion: ",user_option)
            console.log("opcion text: ",user_option_text)
            
            let message = `Hola mi nombre es ${user_name} y me gustaría ${user_option_text},%0Aforma de contacto: %0A  Correo electrónico: ${user_email} %0A  Teléfono: ${user_phone_number}`
            /////////////////
            const componenteEmail = document.createElement("a");
            componenteEmail.href = `mailto:misterrobot1010@gmail.com?subject=Posible%20cliente%2C%20Medusa&body=${message}`;
            
            
            
            document.body.appendChild(componenteEmail);
            componenteEmail.click();
            document.body.removeChild(componenteEmail);
            /////////////////
        }else{
            console.log("datos incompletos")
        }
    });
});