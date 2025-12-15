import MainLayout from "./layouts/MainLayout";


function IniciarSesionForm() {
  return (
    <MainLayout>
        <div className="container min-vh-100 d-flex align-items-center justify-content-center py-4">
        <div className="card shadow-sm border-0 rounded-4 w-100" style={{maxWidth: "520px"}}>
            <div className="card-body p-4 p-md-5">

            <h1 className="h3 fw-bold mb-2">Accede a FITNESS PARK</h1>
            <p className="text-secondary mb-4">
                Inicia sesión si ya tienes cuenta,<br />
                o regístrate en un minuto.
            </p>

            
            <button
                type="button"
                className="btn btn-warning w-100 fw-bold mb-4 py-3 rounded-4 text-dark"
            >
                Registrarme
            </button>

            <div className="divider mb-4">
                <span>o</span>
            </div>

            <h2 className="h3 fw-bold mb-3">Iniciar Sesión</h2>

            <form>
                <div className="mb-3">
                <input
                    type="email"
                    className="form-control form-control-lg rounded-4"
                    placeholder="Email"
                    aria-label="Email"
                />
                </div>

                <div className="mb-3">
                <input
                    type="password"
                    className="form-control form-control-lg rounded-4"
                    placeholder="Contraseña"
                    aria-label="Contraseña"
                />
                </div>

                <div className="form-check d-flex align-items-center gap-2 mb-3">
                <input className="form-check-input" type="checkbox" id="recordarme" />
                <label className="form-check-label fw-semibold" for="recordarme">
                    Recordarme &gt;
                </label>
                </div>

                <button
                type="submit"
                className="btn btn-outline-secondary w-100 py-3 rounded-4"
                >
                Iniciar Sesión
                </button>
            </form>

            </div>
        </div>
        </div>
    </MainLayout>
  );
}

export default IniciarSesionForm;