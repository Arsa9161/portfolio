import dom_elements from "../view/base";

export default class Admin {
    constructor(){
        this.username = "admin"
        this.password = "admin"
        this.admin = dom_elements.admin
        this.admin_submit = dom_elements.admin_submit
        this.admin_user = dom_elements.admin_user
        this.admin_pass = dom_elements.admin_pass
        this.events();
        this.insert_blog = `<div class="ability__title">Блог оруулах</div>
        <form action="" name="form" class="form">
          <div class="form__row">
            
            <div class="form__input">
              <label for="title">Гарчиг</label>
                <input type="text" name="title" id="title" class="shadow--only-hover gradient padding" > 
            </div>

            <div class="form__input">
               <label for="img">Зураг</label>
               <input type="file" name="img" id="img">
            </div>
         
          </div>

          <label for="textarea">Тайлбар</label>
         
          <textarea name="textarea" id="textarea" cols="30" rows="10" class="shadow--only-hover gradient"></textarea>
          <input type="submit" value="оруулах"  class="shadow--only-hover gradient">
        </form>`
    }

    events() {
        if(this.admin_submit){
            this.admin_submit.addEventListener("click", (e) => {
                this.admin.innerHTML = this.insert_blog;
            })
        }
    }
}