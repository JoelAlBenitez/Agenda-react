function ListContacts({contacts}) {

return (
    
    <div className="listContacts">

        <h2>Contactos guardados: 
            <span className="contacts-count">
                {contacts.length}
            </span>
        </h2>

        { contacts.map((contact,index) => (
          
        <div className="contacts-grid" >
          <div className="contact-card" key={index} >
                <div className="card-avatar-wrapper">
                    <div className="avatar-placeholder">
                            {
                            contact.nombre ? contact.nombre.charAt(0) : '?'.toUpperCase()
                            }
                        </div>
                </div>

                <div className="card-options">
                    <i className="bi bi-three-dots"></i>
                </div>

                <div className="card-body">

                    <h3 className="contact-name">{contact.nombre} {contact.apellido}</h3>
                    <span className="contact-badge">Contacto</span>
                    
                    <div className="contact-details">
                        <div className="detail-item">
                            <span className="detail-label"><i className="bi bi-telephone"></i> Teléfono:</span>
                            <span className="detail-value">${contact.telefono || 'N/A'}</span>
                        </div>
                    </div>

                </div>
        </div>
    </div>
      

    ))}

                
</div>
);

}

export default ListContacts;