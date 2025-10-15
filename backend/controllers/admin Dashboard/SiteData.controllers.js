
// controllers/siteData.controller.js
import SiteData from "../../models/admin Dashboard/SiteData.model.js";
import { createLog } from "../../utils/getClientInfo.js";

export const getSiteData = async (req, res) => {
  try {
    const siteData = await SiteData.findOne();
    if (!siteData) {
      const newSite = await SiteData.create({});
      return res.status(200).json(newSite);
    }
    res.status(200).json(siteData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateSiteData = async (req, res) => {
  try {
    const { totalUsers, activeSessions } = req.body;
    const updated = await SiteData.findOneAndUpdate(
      {},
      {
        $set: {
          totalUsers,
          activeSessions,
          lastModified: new Date(),
        },
      },
      { new: true, upsert: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




export const addLog = async (req, res) => {
  try {
      console.log("add log ...............")
      
    const siteData = createLog(req);

    console.log("siteData :", siteData )

    if (!siteData){
        res.status(404).json({error: "couldn't created log" })
    }

    res.status(200).json(siteData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

