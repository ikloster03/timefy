const express = require('express');
const db = require('./database/db');
const config = require('./config');
const bodyParser = require('body-parser');
const timersApi = require('./routes/api/timers');
const baseRoutes = require('./routes/routes');

const app = express( );

app.use( bodyParser.json( ) );
app.use( bodyParser.urlencoded( {
    extended: true
} ) );

app.set( 'views', __dirname + '/views' );

app.set('view engine', 'pug');
app.use(express.static( __dirname + '/public' ) );

app.use('/', baseRoutes);
app.use('/api/timers', timersApi);

const mongodbConfig = config.mongodb || {};

if( !mongodbConfig.uri ) {
    console.log('ERROR: MongoDB not found uri!');
    return;
}

console.log( 'SET MongoDB URI: ', mongodbConfig.uri );

db.connect(mongodbConfig.uri, ( err ) => {
    if( err ) {
        return console.log( err ) ;
    } else {
        console.log( 'db start' );
    }
    const portConfig = config.port || 3000;
    console.log( 'SET PORT: ', portConfig );
    app.listen( portConfig, () => {
        console.log( 'server start' );
    } );
});