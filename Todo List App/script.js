const root = document.querySelector('#root');

function App() {
    const [activity, setActivity] = React.useState('');
    const [edit, setEdit] = React.useState({});
    const [todos, setTodos] = React.useState([]);
    const [message, setMessage] = React.useState('')

    function generateId(){
        return Date.now();
    }

    function saveTodoHandler (event) {
        event.preventDefault();

        if (!activity){
            return setMessage('Silahkan isi nama aktifitas');
        }

        setMessage('');

        if (edit.id){
            const updatedTodo = {
                ...edit,
                name: activity
            }
            const editTodoIndex = todos.findIndex(function (todo) {
                return todo.id === edit.id;
            });
            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = updatedTodo;
            
            setTodos(updatedTodos);

            return cancelEditHandler();
        } else {
            setTodos([...todos, {
                id: generateId(),
                name: activity,
                done: false
            }]);
            setActivity('');
        }

    }

    function removeTodoHandler (todoId) {
        setMessage('');
        const filteredTodos = todos.filter(todo => todo.id != todoId);
        setTodos(filteredTodos);
        if (edit.id){ cancelEditHandler() }
    }

    function editTodoHandler (todo) {
        setMessage('');
        setActivity(todo.name);
        setEdit(todo);
    }

    function cancelEditHandler () {
        setMessage('');
        setEdit({});
        setActivity('');
    }

    function doneTodoHandler (todo) {
        const updatedTodo = {
            ...todo,
            done: todo.done ? false : true
        };
        const editTodoIndex = todos.findIndex(function (currentTodo) {
            return currentTodo.id === todo.id;
        });

        const updatedTodos = [...todos];
        updatedTodos[editTodoIndex] = updatedTodo;
        
        setTodos(updatedTodos);
    }

    return (
        <>  
            <h1>Simple ToDo List</h1>
            {message && <div style={{color: 'red'}}>{message}</div>}
            <div className='input-form'>
                <form onSubmit={saveTodoHandler}>
                    <input 
                        type = "text" 
                        placeholder = "Nama Aktifitas" 
                        value = {activity}
                        onChange = {event => {
                            setActivity(event.target.value);
                    }} />
                    <button type="submit">
                        {edit.id ? 'Simpan perubahan' : 'Tambah'}
                    </button>
                    {edit.id &&
                        <button onClick={cancelEditHandler}>Batal Edit</button>
                    }
                </form>
            </div>
            <div className = 'list-form'>
            {todos.length > 0 ? 
                <ul>
                    {todos.map(todo => {return <li key={todo.id}>
                    <input 
                        type="checkbox" 
                        checked={todo.done}
                        onChange={doneTodoHandler.bind(this, todo)} />
                            {todo.name} ({todo.done ? 'Selesai' : 'Belum Selesai'})
                            <button onClick = {editTodoHandler.bind(this, todo)}>Edit</button>    
                            <button onClick = {removeTodoHandler.bind(this, todo.id)}>Hapus</button>    
                    </li>
                    })}
                </ul>
                    : <p className='nothing'><i>Belum ada Todo yang dibuat</i></p>}
            </div>
        </>
    );
}   

ReactDOM.render(<App />, root);