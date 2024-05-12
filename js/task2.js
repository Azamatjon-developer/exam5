
const getDataFromAPI = async(users) => {
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const users = response.json()
        return users

    }catch(err) {
        console.log("error");
    }
}

const createTable = (users) => {
    console.log(users);
    const TableContainer = document.getElementById("table-container");
    const table = document.createElement("table");
    const headers = ["id", "title", "price", "description", "category", "image", "rating"]; 
    const headerRow = table.insertRow();

    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    })

    users.forEach(user => {
        const row = table.insertRow();
        row.insertCell().textContent = user.id;
        row.insertCell().textContent = user.title;
        row.insertCell().textContent = user.price;
        row.insertCell().textContent = user.description;
        row.insertCell().textContent = user.category;
        row.insertCell().textContent = user.image;
        row.insertCell().textContent = user.rating.rate;
        row.insertCell().textContent = user.rating.count;
        
    })

    TableContainer.appendChild(table);
    table.classList.add("table", "table-hover");
}

const finished   = async() => {
    const users = await getDataFromAPI();

    if (users) {
        createTable(users);
    }
}

finished()