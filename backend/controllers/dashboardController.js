const Gallery = require("../models/Gallery");
const Document = require("../models/Document");
const Achievement = require("../models/Achievement");
const Admissions = require("../models/Admission");

 exports.getDashboardStats = async (req, res) => {
  try {
    const gallery = await Gallery.find();
    const documents = await Document.find();
    const achievements = await Achievement.find();
    const admissions = await Admissions.find();

    // total images count
    const totalImages = gallery.reduce(
      (acc, item) => acc + item.images.length,
      0
    );

    // 🔥 Sort latest data
    const latestAdmissions = admissions
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 3);

    const latestGallery = gallery
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 2);

    const latestDocs = documents
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 2);

    const latestAchievements = achievements
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 2);

    // ⏱ Helper time function
    const formatTime = (date) => {
      const diff = Math.floor(
        (Date.now() - new Date(date)) / (1000 * 60 * 60)
      );
      if (diff < 1) return "Just now";
      if (diff < 24) return `${diff} hrs ago`;
      return `${Math.floor(diff / 24)} days ago`;
    };

    // 🚀 Build activity
    const recentActivity = [
      ...latestAdmissions.map((item) => ({
        text: `New admission: ${item.studentName}`,
        time: formatTime(item.createdAt),
        type: "admission",
      })),
      ...latestGallery.map(() => ({
        text: `Added gallery images`,
        time: "Recently",
        type: "gallery",
      })),
      ...latestDocs.map(() => ({
        text: `Uploaded document`,
        time: "Recently",
        type: "document",
      })),
      ...latestAchievements.map(() => ({
        text: `Achievement added`,
        time: "Recently",
        type: "achievement",
      })),
    ];

    // ✅ SEND RESPONSE AT END
    res.json({
      galleryCount: totalImages,
      documentCount: documents.length,
      achievementCount: achievements.length,
      studentCount: admissions.length,
      recentActivity,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};