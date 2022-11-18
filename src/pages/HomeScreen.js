import React, { useState, useEffect } from 'react';
import '../style/home.css';
import { useNavigate } from 'react-router-dom';
const HomeScreen = () => {
    const [deleteCaso, setDeleteCaso] = useState(false);
    const user = JSON.parse(localStorage.getItem("@storage_user"));
    console.log(user);

    // useEffect(() => {

    // }, [user])

    const Navigate = useNavigate();
    const handleDeleteCaso = (id) => {

        const xd = user.findIndex(users => users.ticket === id)
        console.log(xd);
        user.splice(xd, 1)
        if (localStorage.getItem("@storage_user")) {
            localStorage.setItem('@storage_user', JSON.stringify(user));
            return
        }
    }
    const handlePauseCaso = (id) => {

        // const pausedTicket = document.getElementById(id)
        var childNodes = document.getElementById(id).getElementsByTagName('*');
        for (var node of childNodes) {
            // node.disabled = true;
            node.classList.add('terminar-caso')
        }
        // setDeleteCaso(true)
    }
    const handleContinuar = (id) => {

        // const pausedTicket = document.getElementById(id)
        var childNodes = document.getElementById(id).getElementsByTagName('*');
        for (var node of childNodes) {
            // node.disabled = true;
            node.classList.remove('terminar-caso')
        }
        // setDeleteCaso(true)
    }
    // console.log(user);
    return (
        <div>
            <div className='header-home'>
                <h2 className='title'>Seguimientos de los casos</h2>
                <p className='title add' onClick={() => Navigate('/')}>+</p>
            </div>
            <div className='container d-flex flex-wrap mt-5'>
                {
                    user.map(x =>
                        <div className="card card-content m-2 " key={x.ticket} id={x.ticket}>
                            <div className="card-body">
                                <h5 className={'card-title, caso'}>Nombre: {x.fullName}</h5>
                                <p className={'card-text, caso'}>Direccion: {x.address}</p>
                                <p className={'card-text, caso'}>Telefono: {x.tell}</p>
                                <p className={'card-text, caso'} >Tickets: {x.ticket}</p>


                                <button className='btn btn-warning w-100' onClick={() => handlePauseCaso(x.ticket)}>Caso atendido</button>
                                <button className='btn btn-info w-100 mt-2' onClick={() => handleContinuar(x.ticket)}>Seguir con el caso</button>
                                <button className='btn btn-danger w-100 mt-2' onClick={() => handleDeleteCaso(x.ticket)}>Finalizar caso</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HomeScreen