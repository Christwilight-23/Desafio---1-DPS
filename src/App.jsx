import { useState } from "react";
import ContactList from "./assets/components/ContactList";
import AddContact from "./assets/components/AddContact";
import data from "./data/contacts.json";

function App() {
  const [contacts, setContacts] = useState(data);

  const addContact = (contact) => {
    setContacts([
      ...contacts,
      { ...contact, id: Date.now(), favorito: false }
    ]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const toggleFavorite = (id) => {
    setContacts(
      contacts.map(c =>
        c.id === id ? { ...c, favorito: !c.favorito } : c
      )
    );
  };

  const sortedContacts = [...contacts].sort(
    (a, b) => b.favorito - a.favorito
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Contactos</h1>
      <AddContact onAdd={addContact} />
      <ContactList
        contacts={sortedContacts}
        onDelete={deleteContact}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;