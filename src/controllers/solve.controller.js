const solveService = require("../services/solve.service");

const solve = (req, res, next) => {
    next(solveService.solve());
} 

module.exports = {
    solve,
};
