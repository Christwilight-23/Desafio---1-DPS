import { useState } from "react";

function AddContact({ onAdd }){
    const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.nombre || !form.telefono) return;
        onAdd(form)
        setForm({ nombre: "", apellido: "", telefono: ""})
    }
    
    return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />
      <input
        name="apellido"
        placeholder="Apellido"
        value={form.apellido}
        onChange={handleChange}
      />
      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddContact;
