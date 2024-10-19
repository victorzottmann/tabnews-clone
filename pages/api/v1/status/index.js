const status = (req, res) => {
  res.status(200).json({ key: "status endpoint" });
};

export default status;
