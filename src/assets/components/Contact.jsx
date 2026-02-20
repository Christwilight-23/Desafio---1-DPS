function Contact({contact,onDelete,onToggleFavorite}){
    return(
        <div>
            <h2>
                {contact.nombre}{contact.apellido}
                {contact.favorito && "*"}
            </h2>
            <p>{contact.telefono}</p>

            <button onClick={() => onToggleFavorite(contact.id)}>Favorito</button>

            <button onClick={() => onDelete(contact.id)}>Elimminar</button>
        </div>
    )
}

export default Contact;