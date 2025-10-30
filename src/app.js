const { envs } = require('./config/env');
const { startServer } = require('./server/server');

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
    });
}


//funcion acnostica autoinvocada
//porquese ejecuta inmediatamente por medio de los parentesis al final
(async () => {
    main()
})()