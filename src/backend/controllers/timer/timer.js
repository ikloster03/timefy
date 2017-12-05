const Timer = require('../../models/timer');

const SERVER_ERROR = 500;
const SERVER_SUCCESS = 200;

module.exports = {
    all( req, res ) {
        Timer.all( ( err, docs ) => {
            if( err ) {
                console.log( err );
                return res.sendStatus( SERVER_ERROR );
            }
            res.send( docs );
        });
    },

    findById( req, res ) {
        Timer.findById( req.params.id, ( err, doc ) => {
            if( err ) {
                console.log( err );
                return res.sendStatus( SERVER_ERROR );
            }
            res.send( doc );
        });
    },

    create( req, res ) {
        let timer = {
            name: req.body.name,
            label: req.body.label,
            time_start: req.body.time_start,
            time_end: req.body.time_end,
        };

        Timer.create(timer, ( err, result ) => {
            if( err ) {
                console.log( err );
                return res.sendStatus( SERVER_ERROR );
            }
            res.send( timer );
        })
    },

    update( req, res ) {
        let timer = {
            name: req.body.name,
            label: req.body.label,
            time_start: req.body.time_start,
            time_end: req.body.time_end,
        };

        Timer.update( req.params.id, timer, ( err, result ) => {
            if( err ) {
                console.log( err );
                return res.sendStatus( SERVER_ERROR );
            }
            res.sendStatus( SERVER_SUCCESS );
        });
    },

    delete( req, res ) {
        Timer.delete( req.params.id, ( err, result ) => {
            if( err ) {
                console.log( err );
                return res.sendStatus( SERVER_ERROR );
            }
            res.sendStatus( SERVER_SUCCESS );
        });
    },
};
