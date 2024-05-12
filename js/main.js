

const handleSubmit = (e) => {
    e.preventDefault();
    const users = [];
    const name = e.target[0].value;
    const LastName = e.target[1].value;
    const email = e.target[2].value;
    const phone = e.target[3].value;
    const city = e.target[4].value;
    const type = e.target[5].value;
    const FromCity = e.target[6].value;
    const ToCity = e.target[7].value;
    const date = e.target[8].value;

    let payload = {
        name,
        LastName,
        email,
        phone,
        city,
        type,
        FromCity,
        ToCity, 
        date
    }


    e.target.reset();
    users.push({ ...payload });
    let tr = "";

    users.forEach((item) => {
        tr += `<tr>
        <td>${item.name}</td>
        <td>${item.LastName}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.city}</td>

        </tr>`

    })

    document.getElementById("result").innerHTML += tr
}   