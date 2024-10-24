import Url from "../models/URL.js";
import { nanoid } from "nanoid";
import redirectUrl from "./redirectURL.js";

const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  if (!originalUrl || !validURL(originalUrl)) {
    return res.status(400).json("Invalid URL");
  }

  try {
    let url = await Url.findOne({ originalUrl });
    if (url) {
      return res.status(200).json({ shortUrl: url.shortUrl });
    }

    const shortUrl = nanoid(6);

    url = new Url({
      originalUrl,
      shortUrl
    });

    await url.save();
    res
      .status(201)
      .json({ shortUrl: `${shortUrl}`, redirectUrl: `${baseUrl}/${shortUrl}` });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

function validURL(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.?)+[a-zA-Z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))" + // domain name or IP (v4)
      "(\\:\\d+)?(\\/[-a-zA-Z\\d%@_.~+&:]*)*" + // port and path
      "(\\?[;&a-zA-Z\\d%@_.,~+&:=-]*)?" + // query string
      "(\\#[-a-zA-Z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

export default shortenUrl;
