import axios from "axios";

export const product = async (req, res) => {
  try {
    const reaponce = await axios.get("https://fakestoreapi.com/products");
    res.status(200).json(reaponce.data);
  } catch (error) {
    return res.status(500).json({
      message: "api faled",
    });
  }
};
