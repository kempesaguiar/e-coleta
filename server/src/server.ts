import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({ extended: false }));

app.use('/', (request, response, next) => {
    console.log('------------------');
    console.log('Req Params: ', request.params);
    console.log('Req Body: ', request.body);
    console.log('Req Headers: ', request.headers);
    console.log('IP: ', request.ip);
    console.log('Data: ', new Date());
    next();
    
});


app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3333);