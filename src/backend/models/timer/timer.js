const db = require('../../database/db');
const ObjectID = require('mongodb').ObjectID;

const TABLE_TIMERS = 'timers';

module.exports = {
    all( cb ) {
        db.get( ).collection( TABLE_TIMERS ).find( ).toArray( ( err, docs ) => {
            cb( err, docs );
        });
    },

    findById( id, cb ) {
        db.get( ).collection( TABLE_TIMERS ).findOne( { _id: ObjectID( id ) }, ( err, doc ) => {
            cb( err, doc );
        });
    },

    create( timer, cb ) {
        db.get( ).collection( TABLE_TIMERS ).insertOne( timer, ( err, result ) => {
            cb( err, result );
        });
    },

    update( id, timer, cb ) {
        db.get( ).collection( TABLE_TIMERS ).updateOne( { _id: ObjectID( id ) }, timer, ( err, result ) => {
            cb( err, result );
        });
    },

    delete( id, cb ) {
        db.get().collection(TABLE_TIMERS).deleteOne({_id: ObjectID(id)}, (err, result) => {
            cb(err, result);
        });
    },
};