const todoValidator = {
  createTodoValidator: (req, res, next) => {
    const { title, description, deadline } = req.body;
    if (!title || !description || !deadline) {
      return res.status(400).json({ message: "Title, description and deadline are required" });
    }
    next();
  },
  updateTodoValidator: (req, res, next) => {
    const { id } = req.params;
    const { title, description, deadline } = req.body;
    // if (!title || !description || !deadline) {
    //   return res.status(400).json({ message: "Title, description and deadline are required" });
    // }
    next();
  },
};

module.exports = todoValidator;
