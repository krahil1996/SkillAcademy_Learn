module.exports= reqfilter = (req, res, next) => {
  //middleware
  if (!req.query.age) {
    res.send("<h1>Please enter your age </h1>");
  } else if (req.query.age < 18) {
    res.send("<h1>You a re not allowed to access this page </h1>");
  } else {
    next();
  }
};

