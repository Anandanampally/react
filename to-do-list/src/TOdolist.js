import React, { useEffect, useState } from 'react'

const TOdolist = () => {

    const getLocalData = () => {
        let local = localStorage.getItem('locals');
        if (local) {
            return JSON.parse(local)
        }
        else {
            return []
        }
    }
    const [todos, setTodo] = useState('')
    const [items, setItems] = useState(getLocalData);

    function aDDitems() {
        if (!(todos)) {
        } else {
            setItems([...items, todos]);
            setTodo('')
        }
    }


    function updateItem(id) {
        if (!(todos)) {
        } else {
            console.log(deleteHandler(id));
            const updatedArray = [...items, todos];

            setTodo('')

        }

    }
    const inputHandler = (e) => {
        setTodo(e.target.value);
    }

    const deleteHandler = (id) => {
        console.log(id)
        const updatedItems = items.filter((item, index) => {
            return id !== index;
        })
        setItems(updatedItems);
    }

    const updateHandler = (id) => {
        setTodo(items[id]);
        return inputHandler;
    }

    useEffect(() => {
        localStorage.setItem('locals', JSON.stringify(items))
    }, [items])

    return (
        <div>
            <div>
                <div><a href='/contact'>GO to contact</a></div>
                
               <div> <a href='/about'>GO to about</a></div>
                <input onChange={inputHandler}></input>
                <button onClick={aDDitems}>Add item</button>
                <button onClick={updateItem}>update item</button>
            </div>
            <ul>
                {
                    items.map((item, index) => {
                        return (<li key={index}>{item}<span><button onClick={() => deleteHandler(index)}>delete me</button><button onClick={() => updateHandler(index)}>update</button></span></li>
                        )
                    })}
            </ul>
            <div>

            </div>

        </div>
    )
}

export default TOdolist