const express = require('express');
const path = require('path');

const startServer = (options) => {
    const { port, public_path = 'public' } = options;
    const app = express();

    //para poder usar middelwares se usa el metodo use
    app.use(express.static(path.join(__dirname, '../..', public_path))); //contenido estatido en public_path

    app.get('/', (req, res) => {
        const indexPath = path.join(__dirname, '../..', public_path, 'index.html');
        res.sendFile(indexPath);
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = { startServer };
