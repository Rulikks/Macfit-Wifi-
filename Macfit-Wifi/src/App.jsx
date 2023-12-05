import React from 'react';
import './App.css';
import macfitLogo from './assets/macfit.png'; // Logo dosyasını doğru yoldan import ettiğinize emin olun

function App() {
  return (
    <div className="wifi-access-container">
      <div className="wifi-header">
        <div className="left-divider"></div> {/* Sol yan çizgi */}
        <img src={macfitLogo} alt="Macfit Logo" className="logo" />
        <div className="right-divider"></div> {/* Sağ yan çizgi */}
      </div>
      <h1>CONNECT TO WIFI</h1>
      <form className="wifi-form">
        <input type="text" id="name" name="name" placeholder="İsim" required />
        <input type="text" id="surname" name="surname" placeholder="Soyad" required />
        <input type="tel" id="phone" name="phone" placeholder="Telefon No" required />
        <button type="submit" className="submit-btn">Devam Et</button>
      </form>
      <div className="qr-code">
        {/* QR kodunuzu buraya img etiketi olarak ekleyin */}
      </div>
      <p className="scan-text">SCAN THE QR CODE TO CONNECT</p>
    </div>
  );
}

export default App;
