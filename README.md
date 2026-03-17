# QR Code Generator — misirakyat.com

A simple and efficient QR Code Generator supporting both a web-based interface and a Node.js CLI utility.

## 🚀 Features

- **Web Interface**: Real-time QR code generation using `QRCode.js`.
- **CLI Utility**: Generate and save QR codes directly from the terminal using the `qrcode` Node.js package.
- **Offline Support**: The web interface includes the full `QRCode.js` library for offline functionality.
- **Downloadable QRs**: Easily download generated QR codes as PNG files.

## 🛠️ Technologies Used

- **HTML5/CSS3**: Core structure and styling of the web interface.
- **JavaScript (ES6+)**: Logic for both web and Node.js applications.
- **[QRCode.js](https://github.com/davidshimjs/qrcodejs)**: Client-side QR code generation.
- **[node-qrcode](https://github.com/soldair/node-qrcode)**: Server-side/CLI QR code generation.

## 📦 Getting Started

### Prerequisites

- A modern web browser.
- [Node.js](https://nodejs.org/) (optional, for CLI usage).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qr-generator.git
   cd qr-generator
   ```

2. Install dependencies (for Node.js utility):
   ```bash
   npm install
   ```

## 🖥️ Usage

### Web Interface
Simply open `qr.html` in your favorite web browser.
1. Enter the URL you want to encode.
2. Click **Generate**.
3. Use the **Download PNG** link to save your QR code.

### Node.js CLI
Run the generator script with Node.js:
```bash
node generate.js
```
The script is configured to generate a QR code for `https://misirakyat.com` and save it as `misirakyat_qr.png` in the project root.

## 📝 Configuration

You can customize the QR code settings in `generate.js`:
```javascript
QRCode.toFile(
  "misirakyat_qr.png",
  url,
  {
    width: 400,
    margin: 2,
    errorCorrectionLevel: "H",
  },
  // ...
);
```

## 📄 License

This project is licensed under the ISC License.
