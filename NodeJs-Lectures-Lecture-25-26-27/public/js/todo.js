const tododiv =document.querySelector(".todo");

let Todo = [];

tododiv.append(div);// appending to div ele with class todo

let url = "http://localhost:2000/todo/";

const FetchTodo = async(url)=>
{
    try{
        const res = await fetch(url);

        const jsonData = await res.json();

        for(let i=0; i < jsonData.length; i++)
        {
        const div = document.createElement("div"); // creating new ele
        
        div.classList.add("todo-item");// adding class to it
        
        div.innerText = "This is todo item" // giving text

        div.innerHTML =`

        <img src =${jsonData[i].image} alt="todo image">
        
        <h2>${jsonData[i].title}</h2>

        <p>${jsonData[i].desc}</p>

        <p><span>Status :</span><span>${jsonData[i].status=="on"?"Task Complete":"Pending"}</span></p>

        <button onclick = "DeleteTodo('${url}','${jsonData[i].id}')"> Delete </button>

        `
        tododiv.append(div);// appending to div ele with class todo
        }
        Todo = jsonData;
        console.log(jsonData);
    }
    catch(err)
    {
        console.log(err);
    }
}

FetchTodo(url);

const DeleteTodo = async(url,id)=>
    {
        let deleteUrl= url + "delete/" + id;
        try{
            const res = await fetch(deleteUrl,{
                method : "delete"

            });
            const jsonData = await res.json();

            tododiv.innerHTML = "";

            FetchTodo(url)

            console.log(jsonData);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    FetchTodo(url);