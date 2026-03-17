// generate.js
const QRCode = require("qrcode");
const url = "github.com/yusriamir0";
//  https://misirakyat.com/?reg=qqhulg

// save to file
QRCode.toFile(
  "misirakyat_qr.png",
  url,
  {
    width: 400,
    margin: 2,
    errorCorrectionLevel: "H",
  },
  function (err) {
    if (err) {
      console.error("Failed to write file", err);
      return;
    }
    console.log("Saved misirakyat_qr.png");
  }
);

// or get base64 data URL (if you need to embed)
QRCode.toDataURL(url, { width: 400 })
  .then((dataUrl) => {
    console.log("Data URL length:", dataUrl.length);
    // you can write this to HTML or decode and save
  })
  .catch((err) => console.error(err));

// command : node generate.js
