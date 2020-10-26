import jsonData from "./blogs.json";

export default class Blog {
    constructor(){
        this.json = jsonData;
        Array.from(this.json.data.blogs).reverse().forEach(el => this.insertBlog(el));
    }  
    
     insertBlog(el){
        const items_container = document.getElementById("blogs-container");
        const item_container = document.querySelectorAll(".blogs");
        if(items_container){
            let inserted = false;
    
            Array.from(item_container).forEach(element => {
               
                if(element.childElementCount != 2){
                    element.insertAdjacentHTML("beforeend", `
                    <div class="about__bio shadow" style="width: 40%;font-size: 1.1rem;">
                    <div class="about__bio__link" style="display: flex;align-items: center;">
                        <img src="${el.img}" alt="c" style="width: 40px;height: 40px;margin-right: 20px;">
                        <a href="./blogMore.html?id=${el.id}">${el.title}</a>
                   </div>
                    <div class="about__bio__parag">
                        Тайлбар : <span>  ${el.desc.slice(0,100)}...</span>
                        <p>Нийтэлсэн : <span>${el.date}</span></p> 
                    </div>
                </div>` );
                inserted = true;
                }
            })
            if(!inserted){
                items_container.insertAdjacentHTML("beforeend",`
                <div class="ability__items-container__item ability__items-container__item--horizontally blogs">
        
                                <div class="about__bio shadow" style="width: 40%;font-size: 1.1rem;">
                                    <div class="about__bio__link" style="display: flex;align-items: center;">
                                        <img src="${el.img}" alt="c" style="width: 40px;height: 40px;margin-right: 20px;">
                                        <a href="./blogMore.html?id=${el.id}">${el.title}</a>
                                   </div>
                                    <div class="about__bio__parag">
                                        Тайлбар : <span>  ${el.desc.slice(0,100)}...</span>
                                        <p>Нийтэлсэн : <span>${el.date}</span></p> 
                                    </div>
                                </div>
                            </div>`);
            }
        }
    }
}
