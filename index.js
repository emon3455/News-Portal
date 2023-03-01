const loadCatagories=()=>{
    const url ="https://openapi.programming-hero.com/api/news/categories";
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayCatagories(data.data.news_category))
}

const displayCatagories=(data)=>{
    const container = document.getElementById("catagoris-container");
    data.forEach(element => {
    
        // container.innerHTML += `<a onclick="fetchAllNews('${element.category_id}')" class=nav-link> ${element.category_name}</a>`;

        const p = document.createElement("p");
        p.classList.add("nav-link");
        p.innerHTML=`
            <a onclick="fetchAllNews('${element.category_id}')"> ${element.category_name} </a>
        `;
        container.appendChild(p);

    });
}

const fetchAllNews= async(Id)=>{
    const url = `https://openapi.programming-hero.com/api/news/category/${Id}`;
    
}

loadCatagories();
