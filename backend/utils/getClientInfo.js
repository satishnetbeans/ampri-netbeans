import SiteData from "../models/admin Dashboard/SiteData.model.js";

export const getClientInfo = (req) => {
  const userAgent = req.get("User-Agent") || "Unknown Device";
  console.log(req.socket.remoteAddress);
  const ip =
    req.headers["x-forwarded-for"]?.split(",").shift() ||
    req.socket?.remoteAddress ||
    "Unknown IP";

  return { userAgent, ip };
};

export const createLog = async (req) => {
  console.log("add log ...............");

  const { userAgent, ip } = getClientInfo(req);

  console.log("userAgent, ip  : ", userAgent, ip);

  const siteData = await SiteData.findOneAndUpdate(
    {},
    {
      $push: {
        logs: {
          deviceInfo: userAgent,
          ipAddress: ip,
        },
      },
      $set: { lastModified: new Date() },
    },
    { new: true, upsert: true }
  );

  return siteData;
};
