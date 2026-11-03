import { useState } from "react";

function NewContact({onAdd}) {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    async function ManagerSubmit(event){
        
        event.preventDefault();

        const contact = {
            nombre: name,
            apellido: lastName,
            telefono: phone
        }
        await onAdd(contact);

        setLastName("");
        setName("");
        setPhone("");
    }

    return(
        <div>
          <form onSubmit={ManagerSubmit}  className="form" >
                <div className="name-input">
                    <label htmlFor="name">Nombre:</label>
                    <input
                     placeholder="Juan" 
                     type="text" 
                     id="name"
                     value={name}
                     onChange={e => setName(e.target.value)}
                     name="name" 
                     required />
                </div>
                <div className="lastName-input">
                    <label htmlFor="lastName">Apellido:</label>
                    <input 
                    placeholder="Perez" 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} 
                    required />
                </div>
                <div className="phone-input">
                    <label htmlFor="phone">Teléfono:</label>
                    <input 
                    placeholder="123-456-7890" 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required />
                </div>              
                 <button id="saveContact" className="btn" type="submit">Agregar contacto</button>
            </form>
        </div>

    );
}


export default NewContact