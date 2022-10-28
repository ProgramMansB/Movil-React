import React, { useState } from 'react';

export const Home = () => {

    const useForm = (initialState = {}, onSubmit) => {
        const [formData, setFormData] = React.useState(initialState);

        const handleInputChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit?.(formData);
        }

        return { formData, handleInputChange, handleSubmit };
    }

    const { formData, handleInputChange, handleSubmit } = useForm(
        {
            username: "",
            password: "",
            correo: "",
        },
        (formData) => console.dir(formData)
    );
     
    

    const { username, password, correo } = formData;

    const [ventas, setVentas] = useState();

    const agregarVenta=( item1, item2) => {
        setVentas([{id: "item1", pass: "item2"}]);
        console.log(ventas);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value="asdfs"
                onChange={handleInputChange}
            />  
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="correo"
                value={correo}
                onChange={handleInputChange}
            />
            <button type="submit" onClick={ ()=> agregarVenta(username,password) }>Submit</button>
        </form>
    );


}
export default Home

/*
    const [inputText, setInputText] = useState('');
    const [savedData, setSavedData] = useState(false);

    const handleInputChange = (e) => {
        const text = e.target.value
        setInputText(text);

        if(text === '') {
            setSavedData(false);
        }

    }

    const saveData = () => {
        localStorage.setItem('nombre', inputText);
        setSavedData(true);
    }

    return (
        <div className = 'container'>
            <input 
                className = 'input'
                onChange = { handleInputChange }
                placeholder = 'Ingresa tu nombre'
            />
            <button
                className = 'button'
                onClick = { saveData }
            >
                Guardar
            </button>

        </div>
    )	 */