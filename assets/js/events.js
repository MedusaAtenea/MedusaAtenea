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
    const $form = document.querySelector("#my-form-status")

    $form.addEventListener("submit",async function(event){
              
        event.preventDefault()
        let user_name = document.querySelector("#user_name").value
        let user_email = document.querySelector("#user_email").value
        let user_phone_number = document.querySelector("#user_phone_number").value
        let user_option = $("#user_option select").val()
        let user_option_text = $("#user_option select option:selected").text()
        if ((/\S/.test(user_name) && user_name!=null) && (/\S/.test(user_email) && user_email!=null) && (/\S/.test(user_phone_number) && user_phone_number!=null)) {
            //console.log("nombre: ",user_name," email: ",user_email," phone_number: ",user_phone_number)
            //console.log("opcion: ",user_option)
            //console.log("opcion text: ",user_option_text)
            
            let message = `Hola mi nombre es ${user_name} y me gustaría ${user_option_text},\n forma de contacto: \n  Correo electrónico: ${user_email} \n  Teléfono: ${user_phone_number}`
            /////////////////
            
            var data = new FormData(event.target);
            data.delete("message")
            data.append("message",message)
            //console.log("data a analizar",data)
                
              fetch(event.target.action, {
                  method: event.target.method,
                  body: data,
                  headers: {
                      'Accept': 'application/json'
                  }
              }).then(response => {
                  
                  alert("Correo enviado, pronto será atendido.")
                  $form.reset()
              }).catch(error => {
                  
                  alert("Correo No enviado, lo sentimos.")
              });
        }else{
            alert("Llene todos los datos por favor.")
        }
        
    });
});