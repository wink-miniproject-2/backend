const hintService = require("../services/hint.service");

const hint = (req, res, next) => {
    next(hintService.hint());
} 

module.exports = {
    hint,
};
