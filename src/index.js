import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import { engine } from 'express-handlebars';
import { resolve } from 'path';
import SingletonClass from './models/singleton.js';
import usersRoute from './routes/usersRoute.js';

// Mostrar config
// Mostrar inyeccion de dependencia
// Mostrar variable de CLI para ejecutar async/await

void (async() =>
{
    try
    {
        const URL = process.env.MONGO_DB_URI;
        const SERVER_PORT = 8080;
        await mongoose.connect(URL);

        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        const viewsPath = resolve('src/views');
        app.engine('handlebars', engine({
          layoutsDir: `${viewsPath}/layouts`,
          defaultLayout: `${viewsPath}/layouts/main.handlebars`
        }));
        app.set('view engine', 'handlebars');
        app.set('views', resolve('src/views'));
        app.use(express.static(resolve('src/public')));

        app.get('/', function(req, res)
        {
            res.render('hello');
        });

        app.use(usersRoute);

        app.get('/datos', function(req, res)
        {
            const singleton = SingletonClass.getInstance();
            const data  = singleton.getValue();

            res.status(200).json({ data });
        });

        app.listen(SERVER_PORT, () =>
        {
            console.log(`Conectado al puerto: ${SERVER_PORT}`);
        });
    }
    catch (e)
    {
      console.log('Error: ');
      console.log(e);
    }
})();


