/* catchAsync takes a function "fn" as an argument. It then returns another function that takes 
three arguments: "req, res, and next" and wraps them in Promise.resolve()
 */
const catchAsync = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    // next catch error and sends it to the next middleware
  };
};

module.exports = catchAsync;
