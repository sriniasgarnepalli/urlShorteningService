import Url from "../models/URL.js";

const shortUrlUsage = async (req, res) => {
  const { shortUrl } = req.params;

  const urlData = await Url.findOne({ shortUrl });

  if (urlData) {
    return res.status(200).json({
      clicks: urlData.clicks
    });
  }
  return res.status(400).json({ message: "Invalid Short Code" });
};

export default shortUrlUsage;
