import dom_elements from "../view/base";
import jsonData from "./blogs.json";
import fs from "fs";

export default class Admin {
    constructor(){
      this.json = jsonData;
        this.username = "admin";
        this.password = "admin";
        this.admin = dom_elements.admin;
        this.admin_form = dom_elements.admin_form;
        this.admin_user = dom_elements.admin_user;
        this.admin_pass = dom_elements.admin_pass;
        this.events();
        this.insert_blog = `<div class="ability__title">Блог оруулах</div>
        <form action="" name="form" class="form" id="blog-form">
          <div class="form__row">
            
            <div class="form__input">
              <label for="title">Гарчиг</label>
                <input type="text" name="title" id="title" class="shadow--only-hover gradient padding" required > 
            </div>

            <div class="form__input">
               <label for="img">Зураг</label>
               <input type="file" name="img" id="img"  required>
            </div>
         
          </div>

          <label for="textarea">Тайлбар</label>
         
          <textarea name="textarea" id="textarea" cols="30" rows="10" class="shadow--only-hover gradient"  required></textarea>
          <input type="submit" value="оруулах"  class="shadow--only-hover gradient">
        </form>`
    }

    events() {

        if(this.admin_form){
          this.admin_form.addEventListener("submit", (e) => {
            e.preventDefault();
            if(this.admin_user.value === this.username && this.admin_pass.value === this.password){
              this.admin.innerHTML = this.insert_blog;
              this.blog_form = document.getElementById("blog-form");
              this.blog_title = document.querySelector("#blog-form #title");
              this.blog_img = document.querySelector("#blog-form #img");
              this.blog_desc = document.querySelector("#blog-form #textarea");
              this.blog_form.addEventListener("submit", e => {
                console.log("d");
                e.preventDefault();
                this.pushJSON();
              });
            }
            else 
              alert("Таны нэр эсвэл нууц үг буруу байна.");
              this.admin_user.focus();
          })  
        }

    }
    pushJSON(){
      const img_value = this.blog_img.value.split("\\");
      this.blog_data = {
        id:this.json.data.blogs.length + 1,
        title:this.blog_title.value,
        desc:this.blog_desc.value,
        date:this.formatDate(new Date()),
        img: "./assets/images/" + img_value[img_value.length-1]
      };

      
      fs.readFile('blogs.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
            return
        } else {
          try {
            obj = JSON.parse(data); //now it an object
            obj.data.blogs.push(JSON.stringify(blog_data)); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('blogs.json', json, 'utf8', callback); // write it back 
          } catch(err) {
            console.log('Error parsing JSON string:', err)
        }
    }
    });
      this.clearElements();
      console.log(this.blogs);
      alert("Амжилттай нэмэгдлээ");
      // document.location.href = "http://localhost:8080/blog.html";

    }
    clearElements(){
      this.blog_title.value = "";
      this.blog_img.value = "";
      this.blog_desc.value = "";
    }
    //  downloadObjectAsJson(exportObj, exportName){
    //   var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    //   var downloadAnchorNode = document.createElement('a');
    //   downloadAnchorNode.setAttribute("href",     dataStr);
    //   downloadAnchorNode.setAttribute("download", exportName + ".json");
    //   document.body.appendChild(downloadAnchorNode); // required for firefox
    //   downloadAnchorNode.click();
    //   downloadAnchorNode.remove();
    // }
     formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('/');
  }
}