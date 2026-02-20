import Contact from "./Contact";

function ContactList({ contacts, onDelete, onToggleFavorite}){
    if (contacts.lengh === 0) return <p>No hay contactos existentes</p>;

    return(
        <div>
            {contacts.map(contact =>(
                <Contact
                key={contact.id}
                contact={contact}
                onDelete={onDelete}
                onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
}

export default ContactList;