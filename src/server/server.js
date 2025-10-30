import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export const startServer = (options) => {
  const { port, public_path = 'public' } = options;
  const app = express();

  //para poder usar middelwares se usa el metodo use
  app.use(express.static(path.join(__dirname, '../..', public_path))); //contenido estatido en public_path

  app.get(/.*/, (req, res) => {
    const indexPath = path.join(__dirname, '../..', public_path, 'index.html');
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

