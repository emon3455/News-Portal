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
    console.log(data,catagori);
    document.getElementById("newsAmount").innerText=data.length;
    document.getElementById("newsCatagory").innerText= catagori;
}


loadCatagories();
