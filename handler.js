// const sls = require('serverless-http')
// const handler = require('serverless-express/handler')
// const express = require('serverless-express/express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const helmet = require('helmet');
// const bodyParser = require('body-parser');
// const azureFunctionHandler = require('azure-aws-serverless-express');

//const indexRoutes = require('./api/routes/index');


//const app = express();

// app.use(helmet());
// app.use(bodyParser.json({
//   limit: '15360kb',
// }));
// app.use(bodyParser.urlencoded({
//   extended: false,
// }));
// app.use(cookieParser());
// app.use(cors({
//   maxAge: 604800000,
// }));

// app.use('/', indexRoutes);

// app.get('/hello', (req, res) => res.send('Hello World!'));


// app.use((req, res, next) => {
//     const err = new Error('page not found');
//     err.status = 404;
//     next(err);
//   });
  
//   app.use((err, req, res, next) => {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     // render the error page
//     res.status(err.status || 500);
//     console.log(err.message);
//     res.json(err);
//   });

// module.exports = handler(app);

// const handler = require('serverless-express/handler')
// const express = require('serverless-express/express')
// const app = express();

// const indexRoutes = require('./api/routes/index');

// app.use('/i', indexRoutes);

// app.use((req, res, next) => {
//   console.log(`R=PRUEBA de CONSOLE>LOG   `)
//     const err = new Error('page not found');
//     err.status = 404;
//     next(err);
//   });

// exports.handler = handler(app)

const azureFunctionHandler = require('azure-aws-serverless-express');
const handler = require('serverless-express/handler')
const express = require('serverless-express/express')
const app = express();

// console.log(process.env)
// const indexRoutes = require('./api/routes/index');

app.get('/api/app/i', (context, req) => {console.log(req)});

app.use((req, res, next) => {
  console.log(`R=PRUEBA de CONSOLE>LOG   `)
    const err = new Error('page not found');
    err.status = 404;
    next(err);
  });

exports.api = handler(app)




