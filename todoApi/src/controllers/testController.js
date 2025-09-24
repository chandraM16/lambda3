const testController = (req, res) => {
  return res.json({
    name: "Chandan",
    age: 26,
    job: "Software Engineer",
  });
};

module.exports = {
  testController,
};
