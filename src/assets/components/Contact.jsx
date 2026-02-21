function Contact({ contact, onDelete, onToggleFavorite }) {
  return (
    <div className={`contact-card ${contact.favorito ? "favorito" : ""}`}>
      
      <h3>
        {contact.nombre} {contact.apellido} {contact.favorito && "⭐"}
      </h3>

      <p>Tel: {contact.telefono}</p>

      <div className="contact-actions">
        <button
          className="btn-fav"
          onClick={() => onToggleFavorite(contact.id)}
        >
          Favorito
        </button>

        <button
          className="btn-delete"
          onClick={() => onDelete(contact.id)}
        >
          Eliminar
        </button>
      </div>

    </div>
  );
}

export default Contact;