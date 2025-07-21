const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 3000;

// Configuración de Multer para guardar archivos en la carpeta 'uploads'
const upload = multer({ dest: 'uploads/' });

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta principal que sirve el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Ruta para subir y validar archivos
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No se subió ningún archivo.');
  }

  // Aquí iría la lógica de validación
  console.log('Archivo recibido:', file);

  // Simulación de validación
  const validationResult = {
    fileName: file.originalname,
    size: file.size,
    status: 'Validado',
    issues: []
  };

  res.json(validationResult);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
