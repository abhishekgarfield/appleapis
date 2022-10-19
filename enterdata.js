var express=require("express");
var app=express();
app.use(express.json());

var cors=require("cors");
app.use(cors());
const port=process.env.PORT || 9000;
const uri="mongodb+srv://garfield:1234@cluster0.anf24op.mongodb.net/?retryWrites=true&w=majority"

var MongoClient=require("mongodb").MongoClient;



MongoClient.connect(uri,(err,client)=>{
    if(err) return console.log("connection failed");
    else{
        db=client.db("app-data");
        app.listen(port,()=>{
            console.log("insert data");
            console.log(`Server is running on ${port}`);
        })
    }
})

app.get("/test",async(req,res)=>{
    console.log("here");
    res.send("hi please insert data");
})

app.get("/insertdata",async(req,res)=>{
    const {products}=req.body;
   const response=await db.collection("products").insert([
    {
      "Product_id": 1,
      "category_id": 1,
      "Product name": "Iphone 10",
      "product_price": "30000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 2,
      "category_id": 1,
      "Product name": "Iphone 11",
      "product_price": "40000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 3,
      "category_id": 1,
      "Product name": "Iphone 12",
      "product_price": "45000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 4,
      "category_id": 1,
      "Product name": "Iphone 6",
      "product_price": "20000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 5,
      "category_id": 1,
      "Product name": "Iphone 8s",
      "product_price": "38000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 6,
      "category_id": 1,
      "Product name": "Iphone 5",
      "product_price": "15000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 7,
      "category_id": 1,
      "Product name": "Iphone 12 pro max",
      "product_price": "300000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 8,
      "category_id": 1,
      "Product name": "Iphone 13",
      "product_price": "80000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 9,
      "category_id": 1,
      "Product name": "Iphone 11 pro",
      "product_price": "70000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 10,
      "category_id": 1,
      "Product name": "Iphone xr pro",
      "product_price": "199000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "camera": {
          "Front camera": "12px",
          "Rare camera": "68px",
          "Primary camera": "Yes",
          "Optical Zoom": "Yes",
          "Secondary Camera Available": "Yes",
          "HD Recording": "Yes",
          "Full HD Recording": "yes",
          "Video Recording": "yes"
        },
        "connectivity": {
          "Network Type": "4G VOLTE, 4G, 3G, 2G",
          "Supported Networks": "4G VoLTE, 4G LTE, UMTS, GSM",
          "Internet Connectivity": "4G, 3G, Wi-Fi",
          "3G": "Yes",
          "Pre-installed Browser": "Safari",
          "Bluetooth Support": "Yes",
          "Bluetooth Version": "v5.0",
          "Wi-Fi Version": "802.11ax Wi-Fi 6 with 2x2 MIMO",
          "Wi-Fi Hotspot": "Yes",
          "NFC": "Yes",
          "Map Support": "Maps",
          "GPS Support": "Yes"
        },
        "Other details": {
          "Smartphone": "Yes",
          "SIM Size": "Nano SIM and eSIM",
          "Removable Battery": "No",
          "SMS": "Yes",
          "Graphics PPI": "326 PPI",
          "Sensors": "Face ID, Barometer, Three Axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
          "Supported Languages": "Multi Languages Support",
          "Series": "iPhone 11"
        },
        "Multimedia Features": {
          "Audio Formats": "AAC LC, HE AAC, HE AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC 3), Dolby Digital Plus (E AC 3), Dolby Atmos and Audible (Formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+)",
          "Video Formats": "HEVC, H.264, MPEG 4 Part 2 and Motion JPEG, Supports Dolby Vision and HDR10 Content"
        },
        "Dimensions": {
          "Width": "75.7 mm",
          "Height": "150.9 mm",
          "Depth": "8.3 mm",
          "Weight": "194 g"
        },
        "Call Features": {
          "Phone Book": "Yes",
          "Speaker Phone": "Yes"
        },
        "General": {
          "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
          "Model Number": "MHDA3HN/A",
          "Model Name": "iPhone 11",
          "Color": "Black",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
          "OTG Compatible": "No",
          "Additional Content": "Without AirPods and Charger",
          "SAR Value": "1.6 W/kg (over 1 g) SAR Limit, Head: 1.09, Body: 1.18"
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "1792 x 828 Pixels",
          "Resolution Type": "Liquid Retina HD Display",
          "HD Game Support": "Yes",
          "Other Display Features": "1400:1 Contrast Ratio (Typical), True Tone Display, Wide Colour Display (P3), Haptic Touch, 625 nits Max Brightness (Typical), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 14.2",
          "Processor Type": "A13 Bionic Chip"
        }
      }
    },
    {
      "Product_id": 11,
      "category_id": 2,
      "Product name": "Ipad (1st gen)",
      "product_price": "30000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 12,
      "category_id": 2,
      "Product name": "Ipad (2nd gen 2020)",
      "product_price": "40000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 13,
      "category_id": 2,
      "Product name": "Ipad (3rd gen)",
      "product_price": "60000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 14,
      "category_id": 2,
      "Product name": "Ipad pro(1st gen)",
      "product_price": "100000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 15,
      "category_id": 2,
      "Product name": "Ipad ultra(1st gen)",
      "product_price": "150000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 16,
      "category_id": 2,
      "Product name": "Ipad pro max(1st gen)",
      "product_price": "70000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 17,
      "category_id": 2,
      "Product name": "Ipad classic(1st gen)",
      "product_price": "20000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 18,
      "category_id": 2,
      "Product name": "Ipad mini(1st gen)",
      "product_price": "55000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 19,
      "category_id": 2,
      "Product name": "Ipad mini pro(2nd gen)",
      "product_price": "78000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 20,
      "category_id": 2,
      "Product name": "Ipad (2022)",
      "product_price": "63000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Number": "MK2K3HN/A",
          "Model Name": "iPad (9th Gen)",
          "Color": "Space Grey",
          "Connectivity": "Wi-Fi Only",
          "OS": "iOS",
          "Operating System Version": "15",
          "Voice Call": "No",
          "Video Call": "Yes",
          "Processor Type": "A13 Bionic Chip with 64-bit Architecture",
          "Additional Features": "Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"
        },
        "Product Details": {
          "Display Size": "25.91 cm (10.2 inch)",
          "Sales Package": "iPad, Lightning to USB-C Cable, 20W USB-C Power Adapter",
          "Display Resolution": "2160 x 1620 Pixels",
          "Primary Camera": "8 Megapixels",
          "Internal Storage": "64 GB",
          "Multi-touch": "Yes",
          "Sensors": "Touch ID Sensor, Three-axis Gyro Sensor, Accelerometer, Barometer, Ambient Light Sensor",
          "Sim Type": "No Sim"
        },
        "Camera Features": {
          "Secondary Camera": "12 Megapixels",
          "Video Recording Resolution": "Rear Camera: 1080p (at 25 fps and 30 fps), 720p (at 30 fps), Slow-motion (at 720p at 120 fps), Front Camera: 1080p (at 25 fps, 30 fps or 60 fps) pixels",
          "Video Recording": "Yes",
          "Full HD Recording": "Yes",
          "HD Recording": "Yes",
          "Other Camera Features": "Rear Camera: 8MP Wide Camera, f/2.4 Aperture, Five-element Lens, Panorama (up to 43MP), HDR for Photos, Photo Geotagging, Auto Image Stabilisation, Burst Mode, 3x Video Zoom, Time-lapse Video with Stabilisation, Video Image Stabilisation, Cinematic Video Stabilisation (1080p and 720p), Continuous Autofocus Video, Playback Zoom, Video Formats Recorded: HEVC and H.264, FaceTime HD Camera: 12MP Ultra Wide Camera, 122 Degree Field of View, f/2.4 Aperture, HDR for Photos, Time-lapse Video with Stabilisation, Extended Dynamic Range for Video up to 30 fps, Cinematic Video Stabilisation (1080p and 720p), Lens Correction, Retina Flash, Auto Image Stabilisation, Burst Mode",
          "Digital Zoom": "5x"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v4.2",
          "Browser": "Safari",
          "Wi-fi Version": "802.11 a/b/g/n/ac",
          "Other Connectivity Features": "Video Calling through FaceTime Application"
        },
        "Multimedia Features": {
          "Video Formats Supported": "H.264, MPEG-4, Motion JPEG (M-JPEG)",
          "Full HD Playback": "Yes",
          "HD Playback": "Yes",
          "Video Playback": "Yes",
          "Audio Formats Supported": "AAC (8 to 320 Kbps), Protected AAC (from iTunes Store), HE-AAC, MP3 (8 to 320 Kbps), MP3 VBR, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Apple Lossless, AIFF and WAV"
        },
        "Warranty": {
          "Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Domestic Warranty": "1 Year",
          "Warranty Period": "1 Year"
        }
      }
    },
    {
      "Product_id": 21,
      "category_id": 3,
      "Product name": "Macbook air(1st gen)",
      "product_price": "89000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          "Part Number": "MGN63HN/A",
          "Series": "2020 Macbook Air",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 15 Hours",
          "Power Supply": "30 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "256 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "30.41 cm x 1.61 cm x 21.24 cm",
          "Weight": "1.29 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "49.9 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 22,
      "category_id": 3,
      "Product name": "Macbook air(2nd gen)",
      "product_price": "120000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          "Part Number": "MGN63HN/A",
          "Series": "2020 Macbook Air",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 15 Hours",
          "Power Supply": "30 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "256 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "30.41 cm x 1.61 cm x 21.24 cm",
          "Weight": "1.29 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "49.9 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 23,
      "category_id": 3,
      "Product name": "Macbook air(3rd gen)",
      "product_price": "1400000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          "Part Number": "MGN63HN/A",
          "Series": "2020 Macbook Air",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 15 Hours",
          "Power Supply": "30 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "256 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "30.41 cm x 1.61 cm x 21.24 cm",
          "Weight": "1.29 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "49.9 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 24,
      "category_id": 3,
      "Product name": "Macbook air(2020)",
      "product_price": "56700",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          "Part Number": "MGN63HN/A",
          "Series": "2020 Macbook Air",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 15 Hours",
          "Power Supply": "30 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "256 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "30.41 cm x 1.61 cm x 21.24 cm",
          "Weight": "1.29 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "49.9 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 25,
      "category_id": 3,
      "Product name": "Macbook air(2021)",
      "product_price": "99000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          "Part Number": "MGN63HN/A",
          "Series": "2020 Macbook Air",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 15 Hours",
          "Power Supply": "30 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "256 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "30.41 cm x 1.61 cm x 21.24 cm",
          "Weight": "1.29 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "49.9 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 26,
      "category_id": 3,
      "Product name": "Macbook air(2022)",
      "product_price": "134000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          "Part Number": "MGN63HN/A",
          "Series": "2020 Macbook Air",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 15 Hours",
          "Power Supply": "30 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "256 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "30.41 cm x 1.61 cm x 21.24 cm",
          "Weight": "1.29 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "49.9 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 27,
      "category_id": 3,
      "Product name": "Macbook air 2018(1st gen)",
      "product_price": "55000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          "Part Number": "MGN63HN/A",
          "Series": "2020 Macbook Air",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 15 Hours",
          "Power Supply": "30 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "256 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "30.41 cm x 1.61 cm x 21.24 cm",
          "Weight": "1.29 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "49.9 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 28,
      "category_id": 3,
      "Product name": "Macbook air 2019(1st gen)",
      "product_price": "67000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          "Part Number": "MGN63HN/A",
          "Series": "2020 Macbook Air",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 15 Hours",
          "Power Supply": "30 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "256 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "30.41 cm x 1.61 cm x 21.24 cm",
          "Weight": "1.29 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "49.9 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 29,
      "category_id": 3,
      "Product name": "Macbook air 2019(2nd gen)",
      "product_price": "89000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          "Part Number": "MGN63HN/A",
          "Series": "2020 Macbook Air",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 15 Hours",
          "Power Supply": "30 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "256 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "30.41 cm x 1.61 cm x 21.24 cm",
          "Weight": "1.29 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "49.9 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 31,
      "category_id": 4,
      "Product name": "Macbook pro 2017(1st gen)",
      "product_price": "67000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 32,
      "category_id": 4,
      "Product name": "Macbook pro 2017(2nd gen)",
      "product_price": "74000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 33,
      "category_id": 4,
      "Product name": "Macbook pro 2017(3rd gen)",
      "product_price": "77000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 34,
      "category_id": 4,
      "Product name": "Macbook pro 2018(1st gen)",
      "product_price": "69800",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 35,
      "category_id": 4,
      "Product name": "Macbook pro 2019(1st gen)",
      "product_price": "89000",
      "product_url": "",
      "product_rating": 5,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 36,
      "category_id": 4,
      "Product name": "Macbook pro 2020(1st gen)",
      "product_price": "120000",
      "product_url": "",
      "product_rating": 3.9,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 37,
      "category_id": 4,
      "Product name": "Macbook pro 2021(1st gen)",
      "product_price": "123000",
      "product_url": "",
      "product_rating": 4.7,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 38,
      "category_id": 4,
      "Product name": "Macbook pro 2021(2nd gen)",
      "product_price": "78900",
      "product_url": "",
      "product_rating": 4.8,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 39,
      "category_id": 4,
      "Product name": "Macbook pro 2022(1st gen)",
      "product_price": "189000",
      "product_url": "",
      "product_rating": 4.9,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 40,
      "category_id": 4,
      "Product name": "Macbook pro 2022(3rd gen)",
      "product_price": "230090",
      "product_url": "",
      "product_rating": 4.4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Sales Package": "MacBook Pro, 61 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MYD92HN/A",
          "Part Number": "MYD92HN/A",
          "Series": "2020 Macbook Pro",
          "Color": "Space Grey",
          "Type": "Thin and Light Laptop",
          "Suitable For": "Processing & Multitasking",
          "Battery Backup": "Upto 17 hours",
          "Power Supply": "61 W AC Adapter",
          "MS Office Provided": "No"
        },
        "Processor And Memory Features": {
          "Processor Brand": "Apple",
          "Processor Name": "M1",
          "SSD": "Yes",
          "SSD Capacity": "512 GB",
          "RAM": "8 GB",
          "RAM Type": "DDR4",
          "Processor Variant": "Apple M1 Chip",
          "Expandable Memory": "Upto 16 GB",
          "Graphic Processor": "NA",
          "Number of Cores": "8"
        },
        "Display And Audio Features": {
          "Touchscreen": "No",
          "Screen Size": "33.78 cm (13.3 inch)",
          "Screen Resolution": "2560 x 1600 Pixel",
          "Screen Type": "Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
          "Speakers": "Built-in Speakers",
          "Internal Mic": "Studio Quality Three-mic Array with Directional Beamforming",
          "Sound Properties": "Stereo Speakers with High Dynamic Range, Wide Stereo Sound, Support for Dolby Atmos Playback"
        },
        "Dimensions": {
          "Dimensions": "304.1 x 212.4 x 15.6 mm",
          "Weight": "1.4 kg"
        },
        "Additional Features": {
          "Disk Drive": "Not Available",
          "Web Camera": "720p FaceTime HD Webcam",
          "Keyboard": "Backlit Magic Keyboard",
          "Pointer Device": "Force Touch Trackpad",
          "Included Software": "Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
          "Additional Features": "58.2 WHr Li-polymer Battery"
        },
        "Warranty": {
          "Warranty Summary": "1 Year Limited Warra­nty",
          "Warranty Service Type": "Onsite",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage",
          "Domestic Warranty": "1 Year"
        }
      }
    },
    {
      "Product_id": 41,
      "category_id": 5,
      "Product name": "Airpods 1st gen)",
      "product_price": "20000",
      "product_url": "",
      "product_rating": 4,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Name": "MLWK3HN/A",
          "Color": "White",
          "Headphone Type": "True Wireless",
          "Inline Remote": "No",
          "Sales Package": "AirPods Pro,MagSafe Charging Case,Silicone ear tips (three sizes),Lightning to USB-C Cable,Documentation",
          "Connectivity": "Bluetooth",
          "Headphone Design": "Earbud",
          "Accessories Included": "Additional Earmuffs/Eartips, Charging Case, USB Charging Cable, User Manual, Warranty Card"
        },
        "Product Details": {
          "Sweat Proof": "Yes",
          "Deep Bass": "No",
          "Water Resistant": "Yes",
          "Designed For": "iOS device, iPadOS device, Apple watch, or Mac",
          "With Microphone": "Yes"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v5.0",
          "Battery Type": "Up to 4.5 hours of listening time with a single charge (up to 5 hours with Active Noise Cancellation and Transparency off)6"
        },
        "Warranty": {
          "Domestic Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage"
        }
      }
    },
    {
      "Product_id": 42,
      "category_id": 5,
      "Product name": "Airpods 2nd gen",
      "product_price": "30000",
      "product_url": "",
      "product_rating": 4.9,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Name": "MLWK3HN/A",
          "Color": "White",
          "Headphone Type": "True Wireless",
          "Inline Remote": "No",
          "Sales Package": "AirPods Pro,MagSafe Charging Case,Silicone ear tips (three sizes),Lightning to USB-C Cable,Documentation",
          "Connectivity": "Bluetooth",
          "Headphone Design": "Earbud",
          "Accessories Included": "Additional Earmuffs/Eartips, Charging Case, USB Charging Cable, User Manual, Warranty Card"
        },
        "Product Details": {
          "Sweat Proof": "Yes",
          "Deep Bass": "No",
          "Water Resistant": "Yes",
          "Designed For": "iOS device, iPadOS device, Apple watch, or Mac",
          "With Microphone": "Yes"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v5.0",
          "Battery Type": "Up to 4.5 hours of listening time with a single charge (up to 5 hours with Active Noise Cancellation and Transparency off)6"
        },
        "Warranty": {
          "Domestic Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage"
        }
      }
    },
    {
      "Product_id": 43,
      "category_id": 5,
      "Product name": "Airpods 2022",
      "product_price": "20030",
      "product_url": "",
      "product_rating": 4.3,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Name": "MLWK3HN/A",
          "Color": "White",
          "Headphone Type": "True Wireless",
          "Inline Remote": "No",
          "Sales Package": "AirPods Pro,MagSafe Charging Case,Silicone ear tips (three sizes),Lightning to USB-C Cable,Documentation",
          "Connectivity": "Bluetooth",
          "Headphone Design": "Earbud",
          "Accessories Included": "Additional Earmuffs/Eartips, Charging Case, USB Charging Cable, User Manual, Warranty Card"
        },
        "Product Details": {
          "Sweat Proof": "Yes",
          "Deep Bass": "No",
          "Water Resistant": "Yes",
          "Designed For": "iOS device, iPadOS device, Apple watch, or Mac",
          "With Microphone": "Yes"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v5.0",
          "Battery Type": "Up to 4.5 hours of listening time with a single charge (up to 5 hours with Active Noise Cancellation and Transparency off)6"
        },
        "Warranty": {
          "Domestic Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage"
        }
      }
    },
    {
      "Product_id": 44,
      "category_id": 5,
      "Product name": "Airpods 1st gen 2021",
      "product_price": "25000",
      "product_url": "",
      "product_rating": 4.1,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Name": "MLWK3HN/A",
          "Color": "White",
          "Headphone Type": "True Wireless",
          "Inline Remote": "No",
          "Sales Package": "AirPods Pro,MagSafe Charging Case,Silicone ear tips (three sizes),Lightning to USB-C Cable,Documentation",
          "Connectivity": "Bluetooth",
          "Headphone Design": "Earbud",
          "Accessories Included": "Additional Earmuffs/Eartips, Charging Case, USB Charging Cable, User Manual, Warranty Card"
        },
        "Product Details": {
          "Sweat Proof": "Yes",
          "Deep Bass": "No",
          "Water Resistant": "Yes",
          "Designed For": "iOS device, iPadOS device, Apple watch, or Mac",
          "With Microphone": "Yes"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v5.0",
          "Battery Type": "Up to 4.5 hours of listening time with a single charge (up to 5 hours with Active Noise Cancellation and Transparency off)6"
        },
        "Warranty": {
          "Domestic Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage"
        }
      }
    },
    {
      "Product_id": 45,
      "category_id": 5,
      "Product name": "Airpods 2020",
      "product_price": "13000",
      "product_url": "",
      "product_rating": 4.0,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Name": "MLWK3HN/A",
          "Color": "White",
          "Headphone Type": "True Wireless",
          "Inline Remote": "No",
          "Sales Package": "AirPods Pro,MagSafe Charging Case,Silicone ear tips (three sizes),Lightning to USB-C Cable,Documentation",
          "Connectivity": "Bluetooth",
          "Headphone Design": "Earbud",
          "Accessories Included": "Additional Earmuffs/Eartips, Charging Case, USB Charging Cable, User Manual, Warranty Card"
        },
        "Product Details": {
          "Sweat Proof": "Yes",
          "Deep Bass": "No",
          "Water Resistant": "Yes",
          "Designed For": "iOS device, iPadOS device, Apple watch, or Mac",
          "With Microphone": "Yes"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v5.0",
          "Battery Type": "Up to 4.5 hours of listening time with a single charge (up to 5 hours with Active Noise Cancellation and Transparency off)6"
        },
        "Warranty": {
          "Domestic Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage"
        }
      }
    },
    {
      "Product_id": 46,
      "category_id": 5,
      "Product name": "Airpods 1st 2019",
      "product_price": "19000",
      "product_url": "",
      "product_rating": 4.7,
      "product_images": ["url1", "url2", "url3"],
      "colors": ["red", "green", "yellow"],
      "specifications": {
        "General": {
          "Model Name": "MLWK3HN/A",
          "Color": "White",
          "Headphone Type": "True Wireless",
          "Inline Remote": "No",
          "Sales Package": "AirPods Pro,MagSafe Charging Case,Silicone ear tips (three sizes),Lightning to USB-C Cable,Documentation",
          "Connectivity": "Bluetooth",
          "Headphone Design": "Earbud",
          "Accessories Included": "Additional Earmuffs/Eartips, Charging Case, USB Charging Cable, User Manual, Warranty Card"
        },
        "Product Details": {
          "Sweat Proof": "Yes",
          "Deep Bass": "No",
          "Water Resistant": "Yes",
          "Designed For": "iOS device, iPadOS device, Apple watch, or Mac",
          "With Microphone": "Yes"
        },
        "Connectivity Features": {
          "Bluetooth Version": "v5.0",
          "Battery Type": "Up to 4.5 hours of listening time with a single charge (up to 5 hours with Active Noise Cancellation and Transparency off)6"
        },
        "Warranty": {
          "Domestic Warranty": "1 Year",
          "Warranty Summary": "1 Year Warranty",
          "Covered in Warranty": "Manufacturing Defects",
          "Not Covered in Warranty": "Physical Damage"
        }
      }
    }
  ]
  );
   console.log(response);
   res.send(response);
})

