const pushService = require("../services/push.service");

const push = (req, res, next) => {
    next(pushService.push());
} 

module.exports = {
    push,
};
