import database from "../../../../infra/database.js";

const status = async (req, res) => {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result);
  res.status(200).json({ key: "status endpoint" });
};

export default status;
