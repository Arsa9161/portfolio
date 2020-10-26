import jsonData from "./blogs.json";

export default class BlogMore {
    constructor(){
        this.json = jsonData;
        this.href = document.location.href.split("?")[1];
        if(this.href){
            this.id = this.href.slice(this.href.indexOf('=') + 1,this.href.length);
            this.blogArray = Array.from(this.json.data.blogs);
            this.blogJson = this.blogArray.forEach(el => {
                if(el.id == this.id) {
                    this.insertBlog(el);
                } 
            });
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
            Array.from(el.comments).forEach(el => comment.insertAdjacentHTML("beforeend",`<div class="comment">
            <div class="comment__user"><b>${el.user}</b> <em id="comment-date">${el.date}</em></div>
            <div class="comment__parag">${el.comment}.</div>
            </div>` ))
        }
    
    }
    
}
