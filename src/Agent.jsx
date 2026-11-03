import { useState, useEffect } from "react";

import ListContact from  "./components/ListContacts";
import NewContact from "./components/NewContact";

const URL_API = "http://www.raydelto.org/agenda.php";


function Agent(){

    const [contacts, setContacts] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {

        async function getContacts(){
            try
            {
            
                const response = await fetch(URL_API);
                
                if(!response.ok){
                    throw new Error("No se pudo conectar a la API y obtener los contactos");
                }

                const data = await response.json();

                setContacts(data);

            }catch(error){

                console.error(error);
                setMessage("No se pudieron cargar los datos");
            }
        }

    getContacts();

    }, []);

    async function addContacts(contact){

        try
        {
        const response = await fetch(URL_API,  {

           method:"POST",

           headers:{
            "Content-Type": "application/json"
           },

           body: JSON.stringify(contact)

        });

        if(!response.ok){
            throw new Error("No se pudo conectar a la API");
        }

        setContacts(contacts =>  [
            ...contacts,
            contact
        ]);
        
        setMessage("Contacto guardado con exito");
    }catch(error){

        console.error(error);
        setMessage("No se pudo agregar el contacto");
    }
}

    return (
    <main className="app-shell">

        <div className="agenda-container">

            <header className="agenda-header">
                <div>
                    <span className="eyebrow">GESTIÓN PERSONAL</span>
                    <h1>Mi Agenda</h1>
                    <p>Organiza y administra tus contactos.</p>
            {message && (
                <p className="message">
                    {message}
                </p>
            )}
                </div>

                <div className="header-icon">
                    <i className="bi bi-person-lines-fill"></i>
                </div>
            </header>

            <section className="container-header">
                <NewContact onAdd={addContacts} />
            </section>

            <section className="contacts-section">
                <ListContact contacts={contacts} />
            </section>

          

        </div>

    </main>
);



}

export default Agent;