import Url from "../models/URL.js";

const shortUrlUsage = async (req, res) => {
  const { shortUrl } = req.params;

  const urlData = await Url.findOne({ shortUrl });

  if (urlData) {
    const analyticsData = {
      originalUrl: urlData.originalUrl,
      clicks: urlData.clicks,
      accessLog: urlData.accessLog
    };
    return res.status(200).json({
      analyticsData
    });
  }
  return res.status(400).json({ message: "URL Not found" });
};

export default shortUrlUsage;
