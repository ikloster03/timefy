const TimerModel = require('./timer');

module.exports = {
    all: TimerModel.all,
    findById: TimerModel.findById,
    create: TimerModel.create,
    update: TimerModel.update,
    delete: TimerModel.delete,
};