import { useState } from "react";
import MainLayout from "./layouts/MainLayout";

function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
    localidad: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Opcional: limpiar error del campo que se está editando
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    const { nombre, apellidos, email, telefono, password, confirmPassword, localidad } = formData;

    // Campos vacíos
    if (!nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!apellidos.trim()) newErrors.apellidos = "Los apellidos son obligatorios.";
    if (!email.trim()) newErrors.email = "El email es obligatorio.";
    if (!telefono.trim()) newErrors.telefono = "El teléfono es obligatorio.";
    if (!password) newErrors.password = "La contraseña es obligatoria.";
    if (!confirmPassword) newErrors.confirmPassword = "Repite la contraseña.";
    if (!localidad) newErrors.localidad = "Selecciona una localidad.";

    // Email formato
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Introduce un email válido.";
    }

    // Teléfono sin letras
    if (telefono && /[A-Za-z]/.test(telefono)) {
      newErrors.telefono = "El teléfono no puede contener letras.";
    }

    // Contraseña fuerte
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
    if (password && !passwordRegex.test(password)) {
      newErrors.password =
        "Mínimo 8 caracteres, con 1 mayúscula, 1 minúscula y 1 carácter especial.";
    }

    // Confirmación de contraseña
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Datos válidos:", formData);

    // Opcional: limpiar el formulario
    // setFormData({
    //   nombre: "",
    //   apellidos: "",
    //   email: "",
    //   telefono: "",
    //   password: "",
    //   confirmPassword: "",
    //   localidad: "",
    // });
  };

  return (
    <MainLayout>
      <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5">
        <div
          className="card shadow-sm border rounded-4 w-100"
          style={{ maxWidth: "600px" }}
        >
          <div className="card-body p-4 p-md-5">
            <h1 className="h3 mb-2 bebas-neue color-gris fs-1">
              Regístrate en FITNESS PARK
            </h1>
            <p className="text-secondary mb-4 fs-5">
              Crea tu cuenta para empezar a entrenar con nosotros.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Nombre */}
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className={`form-control form-control-lg rounded-4 ${
                    errors.nombre ? "is-invalid" : ""
                  }`}
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <div className="invalid-feedback">{errors.nombre}</div>
                )}
              </div>

              {/* Apellidos */}
              <div className="mb-3">
                <label htmlFor="apellidos" className="form-label fw-semibold">
                  Apellidos
                </label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  className={`form-control form-control-lg rounded-4 ${
                    errors.apellidos ? "is-invalid" : ""
                  }`}
                  value={formData.apellidos}
                  onChange={handleChange}
                  placeholder="Tus apellidos"
                />
                {errors.apellidos && (
                  <div className="invalid-feedback">{errors.apellidos}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control form-control-lg rounded-4 ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tucorreo@ejemplo.com"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Teléfono */}
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label fw-semibold">
                  Teléfono
                </label>
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  className={`form-control form-control-lg rounded-4 ${
                    errors.telefono ? "is-invalid" : ""
                  }`}
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Tu número de teléfono"
                />
                {errors.telefono && (
                  <div className="invalid-feedback">{errors.telefono}</div>
                )}
              </div>

              {/* Localidad */}
              <div className="mb-3">
                <label htmlFor="localidad" className="form-label fw-semibold">
                  Localidad
                </label>
                <select
                  id="localidad"
                  name="localidad"
                  className={`form-select form-select-lg rounded-4 ${
                    errors.localidad ? "is-invalid" : ""
                  }`}
                  value={formData.localidad}
                  onChange={handleChange}
                >
                  <option value="" hidden>Selecciona una localidad</option>
                  <option value="Irun">Irun</option>
                  <option value="Donostia">Donostia</option>
                  <option value="Hernani">Hernani</option>
                </select>
                {errors.localidad && (
                  <div className="invalid-feedback">{errors.localidad}</div>
                )}
              </div>

              {/* Contraseña */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-control form-control-lg rounded-4 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Contraseña"
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              {/* Confirmar contraseña */}
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="form-label fw-semibold"
                >
                  Repite la contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`form-control form-control-lg rounded-4 ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repite la contraseña"
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                className="btn btn-warning w-100 py-3 border-dark"
              >
                REGISTARME
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Registro;
