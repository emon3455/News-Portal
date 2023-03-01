const loadCatagories=()=>{
    const url ="https://openapi.programming-hero.com/api/news/categories";
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayCatagories(data.data.news_category))
    .catch(ex=>{
        console.log(ex);
    })
}

const displayCatagories=(data)=>{
    const container = document.getElementById("catagoris-container");
    data.forEach(element => {
    
        // container.innerHTML += `<a onclick="fetchAllNews('${element.category_id}')" class=nav-link> ${element.category_name}</a>`;

        const p = document.createElement("p");
        p.classList.add("nav-link");
        p.innerHTML=`
            <button class="btn btn-primary" onclick="fetchAllNews('${element.category_id}','${element.category_name}')"> ${element.category_name} </button>
        `;
        container.appendChild(p);

    });
}

const fetchAllNews= async(Id,catagori)=>{
    try{
        const url = `https://openapi.programming-hero.com/api/news/category/${Id}`;
        const res = await fetch(url);
        const data = await res.json();
        displayData( data.data, catagori);
    }
    catch(ex){
        console.log(ex);
    }
}

const  displayData=(data,catagori)=>{
    // set alert
    document.getElementById("newsAmount").innerText=data.length;
    document.getElementById("newsCatagory").innerText= catagori;

    // select card container:
    const container = document.getElementById("all-News");
    container.innerHTML="";

    data.forEach(news=>{
        console.log(news);
        container.innerHTML +=`
            <div class="card mb-3 w-full">
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-9 d-flex flex-column ">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">
                                ${news.details.slice(0,200)? news.details.slice(0,200)+"...":news.details.slice(0,100)}
                            </p>

                            <p class="card-text">
                                ${news.details.slice(0,200)? news.details.slice(0,200)+"...":news.details.slice(0,50)}
                            </p>
                            
                        </div>

                        <div class="card-footer d-flex justify-content-between align-items-center">

                            <div class="d-flex">

                                <div class="p-1">
                                    <img class="rounded-circle" src="${news.author.img}" alt="" height="40" width="40">
                                </div>
                                <div class="">
                                    <p class="h5 mb-0">${news.author.name}</p>
                                    <p>${news.author.published_date? news.author.published_date:""}</p>
                                </div>

                            </div>

                            <div class="">
                                <i class="fa-solid fa-eye"></i>
                                <span>${news.total_view}M</span>
                            </div>

                            <div class="">

                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            
                            </div>

                            <div class="">
                                <i onclick="singleDataload('${news._id}')" class="fa-solid fa-arrow-right"></i>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        `;
    })

}


const singleDataload=(id)=>{
    console.log(id);
}


loadCatagories();
