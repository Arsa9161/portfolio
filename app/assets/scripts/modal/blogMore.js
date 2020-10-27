import jsonData from "./blogs.json";

export default class BlogMore {
    constructor(){
        this.json = jsonData;
        this.href = document.location.href.split("?")[1];
        if(this.href){
            this.id = this.href.slice(this.href.indexOf('=') + 1,this.href.length);
            this.blogArray = Array.from(this.json.data.blogs);
            this.blogArray.forEach(el => {
                if(el.id == this.id) {
                    this.insertBlog(el);
                } 
            });
            this.events();
        }
    }
     insertBlog(el) {
        const blog = document.querySelector(".blog");
        const comment = document.querySelector(".comment-container");
        const injectHtml = `
        <div class="blog__title">
        <img src="${el.img}" alt="">
        <p>${el.title} <em id="date">${el.date}</em></p>
        </div>
        <div class="blog__desc">
        ${el.desc}
        </div>`;
        blog.innerHTML = injectHtml;
        // herev comment bval
        if(el.comments){
            comment.innerHTML ="";
            Array.from(el.comments).forEach(el => comment.insertAdjacentHTML("beforeend",`<div class="comment">
            <div class="comment__user"><b>${el.user}</b> <em id="comment-date">${el.date}</em></div>
            <div class="comment__parag">${el.comment}.</div>
            </div>` ))
        }
    }  
    events() {
        this.comment_form = document.getElementById("comment-form");
        this.comment_parag = document.querySelector("#comment-form #textarea");
        this.comment_user_name = document.querySelector("#comment-form #username");
        this.comment_form.addEventListener("submit", e => {
            e.preventDefault();
            if(this.validateText(this.comment_parag.value)){
                this.pushCommentToJSON(this.id);
                this.clearElements();
                alert("Амжилттай нийтэллээ");
            } else {
                alert("Та мэдээллээ зөв оруулна уу.");
            }
        });
    }
    clearElements(){
        this.comment_parag.value ="";
        this.comment_user_name.value ="";
    }
    validateText(element){
        var re = /^[a-zA-Z\-]+$/;
        return re.test(String(element).toLowerCase());
    }
    pushCommentToJSON(id_of_blog){
    
        this.blogArray = Array.from(this.json.data.blogs);
        this.blogArray.forEach(el => {
            if(el.id == id_of_blog) {
                
                const comment = {
                    user : (this.comment_user_name.value!="") ? this.comment_user_name.value : "Guest",
                    comment: this.comment_parag.value,
                    date: this.formatDate(new Date)
                }
                if(el.comments){
                    el.comments.push(comment);
                }else {
                    let comments = [comment]
                    el.comments = comments;
                }
                
                this.insertBlog(el);
            } 
        });
    }
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
