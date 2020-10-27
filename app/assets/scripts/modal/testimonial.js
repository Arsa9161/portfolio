export default class Testimonial {
    constructor(){
        this.form = document.getElementById("testimonial-form");
        if(this.form){
          
            this.lastname = document.querySelector("#testimonial-form #lastname");
            this.username = document.querySelector("#testimonial-form #username");
            this.email = document.querySelector("#testimonial-form #email");
            this.textarea = document.querySelector("#testimonial-form #textarea");
            this.events();
        }
    }

    events(){
        this.form.addEventListener("submit", e => {
            e.preventDefault();
    
            if(this.validate(this.email.value, "EMAIL") &&
               this.validate(this.username.value, "NAME") &&
               this.validate(this.lastname.value, "NAME") &&
               this.textarea.value != "" ){
                   this.clearElements();
                  alert("Амжилттай илгээлээ");
            } else {
                  alert("Мэдээллээ зөв оруулна уу.");
            }
        });
    }
    clearElements(){
        this.email.value = "";
        this.username.value = "";
        this.lastname.value = "";
        this.textarea.value = "";
    }
    validate(element, name){
        switch(name) {
            case "EMAIL": 
                return this.validateEmail(element);
            case "NAME" :
                return this.validateName(element);
        }
    }
    validateEmail(element) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(element).toLowerCase());
    }
    validateName(element){
        var re = /^[a-zA-Z\-]+$/;
        return re.test(String(element).toLowerCase());
    }
}