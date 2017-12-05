let MogoClient = require('mongodb').MongoClient;

let state = {
    db: null
};

exports.connect = function (url, done) {
    if(state.db) {
        return done();
    }
    MogoClient.connect(url, function (err, db) {
        if(err) {
            return done(err);
        }
        state.db = db;
        done();
    })
};

exports.get = function () {
    return state.db;
};