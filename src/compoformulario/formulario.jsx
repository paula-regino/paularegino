import React, { useState } from 'react';


export function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  function showalert(type, title, text) {
    alert(`${title}\n${text}`);
  }

  function validaciontiemReal(name, value) {
    let error = '';

    switch (name) {
      case 'nombre':
        if (!value.trim()) {
          error = 'El nombre es obligatorio';
        } else if (value.length < 5) {
          error = 'El nombre debe tener mínimo 5 caracteres';
        } else if (value.length > 30) {
          error = 'El nombre debe tener máximo 30 caracteres';
        }
        break;

      case 'apellidos':
        if (!value.trim()) {
          error = 'Los apellidos son obligatorios';
        } else if (value.length < 5) {
          error = 'Los apellidos deben tener mínimo 5 caracteres';
        } else if (value.length > 30) {
          error = 'Los apellidos deben tener máximo 30 caracteres';
        }
        break;

      case 'telefono':
        if (!value.trim()) {
          error = 'El teléfono es obligatorio';
        } else if (!/^\d+$/.test(value)) {
          error = 'El teléfono solo puede tener números';
        } else if (value.length < 7 || value.length > 10) {
          error = 'El teléfono debe tener entre 7 y 10 dígitos';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'El correo electrónico es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Debes tener un formato válido de correo electrónico (ej. usuario@dominio.com)';
        }
        break;

      default:
        break;
    }
    return error;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    const error = validaciontiemReal(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }

  function validateForm() {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validaciontiemReal(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      showalert('success', '¡Éxito!', 'Los datos fueron guardados correctamente');
      setFormData({
        nombre: '',
        apellidos: '',
        telefono: '',
        email: ''
      });
      setErrors({});
    } else {
      showalert('error', '¡Error!', 'Por favor, corrige los errores en el formulario');
    }
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Registro de Usuario</h2>
              <form onSubmit={handleSubmit} noValidate>
                {/* Nombre */}
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingrese su nombre (5-30 caracteres)"
                  />
                  {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                </div>
                {/* Apellidos */}
                <div className="mb-3">
                  <label htmlFor="apellidos" className="form-label">Apellidos *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.apellidos ? 'is-invalid' : ''}`}
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    placeholder="Ingrese sus apellidos (5-30 caracteres)"
                  />
                  {errors.apellidos && <div className="invalid-feedback">{errors.apellidos}</div>}
                </div>
                {/* Teléfono */}
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Solo números (7-10 dígitos)"
                  />
                  {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico *</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="usuario@dominio.com"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                {/* Botón */}
                <button type="submit" className="btn btn-primary w-100">
                  Guardar Datos
                </button>
              </form>
              {/* Reglas de validación */}
              <div className="mt-4 p-3 bg-light rounded">
                <h5>Reglas de validación:</h5>
                <ul className="mb-0">
                  <li>• Todos los campos son obligatorios (*)</li>
                  <li>• Nombre y apellidos: 5-30 caracteres</li>
                  <li>• Teléfono: solo números, 7-10 dígitos</li>
                  <li>• Email: formato válido (usuario@dominio.com)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}