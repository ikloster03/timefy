const TimerController = require('./timer');

module.exports = {
    all: TimerController.all,
    findById: TimerController.findById,
    create: TimerController.create,
    update: TimerController.update,
    delete: TimerController.delete,
};