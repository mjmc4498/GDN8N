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
                <h3>Resultado de la Validación</h3>
                <p><strong>Archivo:</strong> ${result.fileName}</p>
                <p><strong>Tamaño:</strong> ${result.size} bytes</p>
                <p><strong>Estado:</strong> ${result.status}</p>
            `;
        } else {
            validationResultDiv.innerHTML = `<p>Error en la validación: ${response.statusText}</p>`;
        }
    } catch (error) {
        validationResultDiv.innerHTML = `<p>Error en la conexión: ${error.message}</p>`;
    }
});
