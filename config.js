require('dotenv').config();

module.exports = {
  // Port this service runs on
  PORT: process.env.PORT || 9098,

  // Your backend APIs
  ATTENDANCE_API_URL: process.env.ATTENDANCE_API_URL,

  // API Keys
  ATTENDANCE_API_KEY:  process.env.ATTENDANCE_API_KEY,

  // Org & activity config
  PARENT_ORG_ID: process.env.PARENT_ORG_ID ? parseInt(process.env.PARENT_ORG_ID) : 2,
  ACTIVITY_ID:   process.env.ACTIVITY_ID   ? parseInt(process.env.ACTIVITY_ID)   : 4,

  // WhatsApp recipients
  WHATSAPP_TO_1: process.env.WHATSAPP_TO_1,
  WHATSAPP_TO_2: process.env.WHATSAPP_TO_2,


};