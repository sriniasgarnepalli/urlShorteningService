import Url from "../models/URL.js";

const redirectUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });
    if (url) {
      url.clicks += 1;

      url.accessLog.push({
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"],
        referrer: req.headers["referer"] || "Direct"
      });

      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(400).json({ message: "URL not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default redirectUrl;
