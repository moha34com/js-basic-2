const model = (function(){
    let todos = [
        {
            id     : 1,
            title_in  : 'Todo 1',
            body_in   : 'Todo 1 body',
        },
        {
            id     : 2,
            title_in  : 'Todo 2',
            body_in   : 'Todo 2 body',
        },
        {
            id     : 3,
            title_in  : 'Todo 3',
            body_in   : 'Todo 3 body',
        },
        {
            id     : 4,
            title_in  : 'Todo 4',
            body_in   : 'Todo 4 body',
        }
    ];
    // const get_todo = function(){
    //     return todos
    // }
    const add_todo = function (todo){
        todos.push(todo);
        return todos
    }
    const delete_todo = function(todo_id){
        let new_todos = [];
        for (i = 0; i< todos.length; i++){
            if(todos[i].id != todo_id){
                new_todos.push(todos[i]);
            }
        }
        todos = new_todos;
    }
    return {
        add_todo,
        
        
    }
})()
const view = (function (){
    const view_els = {
        input_fields_names : ['title_in', 'body_in', 'Date_in', 'color_in'],
        input_fields       : ['title', 'body', 'Date', 'color'],
        add_btn            : document.querySelector('#add'),
        list               : document.querySelector('#list'),
    }    
    const get_data = function(){
        let data = {}
        for(i = 0; i < view_els.input_fields.length; i++){
            let el_key = view_els.input_fields_names[i];
            let el_value = document.querySelector(`#${view_els.input_fields[i]}`).value;
            data[el_key] = el_value;
            document.querySelector(`#${view_els.input_fields[i]}`).value = '';

        }
        return data
    }   
    const render_list = function(todos_list){
        view_els.list.innerHTML = '';
        for(i = todos_list.length -1; i >= 0; i--){
            let new_li_el = `
            <li class="list-group-item">
                <h4>${todos_list[i].title_in}</h4>
                <hr>
                <p>${todos_list[i].body_in}</p>
            </li>
            `
            view_els.list.innerHTML += new_li_el;
        }
    }
    const addBtn = function(){
        return view_els.add_btn
    }
    return{
        get_data,
        render_list,
        addBtn,
        
    }   
})();   
const controller = (function (){
    const inite = function(){
        view.addBtn().onclick = function (){
            /*
                1- get data from the form
                2- add data to the store
                3- re-render the todo list
            */
             const data = view.get_data();  //get data from the form
             const todos_list = model.add_todo(data);
             console.log(todos_list)
             view.render_list(todos_list); //render data in the html page 
        }
    }

    return{
        inite,
    }
})()
controller.inite();























