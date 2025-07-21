document.getElementById('upload-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const validationResultDiv = document.getElementById('validation-result');

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            validationResultDiv.innerHTML = `
                <div class="alert alert-success">
                    <h4 class="alert-heading">Resultado de la Validación</h4>
                    <p><strong>Archivo:</strong> ${result.fileName}</p>
                    <p><strong>Tamaño:</strong> ${result.size} bytes</p>
                    <p class="mb-0"><strong>Estado:</strong> ${result.status}</p>
                </div>
            `;
        } else {
            validationResultDiv.innerHTML = `
                <div class="alert alert-danger">
                    <strong>Error en la validación:</strong> ${response.statusText}
                </div>
            `;
        }
    } catch (error) {
        validationResultDiv.innerHTML = `
            <div class="alert alert-danger">
                <strong>Error en la conexión:</strong> ${error.message}
            </div>
        `;
    }
});
