import React, { useState } from 'react';
import './App.css';
import macfitLogo from './assets/macfit.png';
import placeholderQRCode from './assets/frame.png';   
import trainer from './assets/trainer.svg'

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Eksik olan state tanımı

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (phoneNumber.length === 10) {
      setIsSubmitted(true); // Form başarılı bir şekilde gönderildi
    } else {
      alert('Lütfen geçerli bir telefon numarası giriniz. (10 haneli numara)');
    }
  };

  const toggleQRCode = () => {
    setShowQR(!showQR); 
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="background">
      <div className="wifi-access-container">
        <div className="wifi-header">
          <div className="left-divider"></div>
          <img src={macfitLogo} alt="Macfit Logo" className="logo" />
          <div className="right-divider"></div>
        </div>
        {isSubmitted ? (
          <div className="success-message">
            Başarılı şekilde giriş yaptınız, Macfit İnternet ile hızına hız kat!
            
          </div>
        ) : (
          <>

            <h1>CONNECT TO WIFI</h1>    

            <form className="wifi-form" onSubmit={handleSubmit}>
              <input type="text" id="name" name="name" placeholder="İsim" required />
              <input type="text" id="surname" name="surname" placeholder="Soyad" required />
              <div className="phone-input">
                <span className="phone-prefix">+90</span>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="555 555 55 55" 
                  value={phoneNumber} 
                  onChange={handlePhoneChange} 
                  maxLength="10" 
                  required 
                />
              </div>
              <button type="submit" className="submit-btn">Devam Et</button>
            </form>
            <br></br>
            <div className="qr-text" onClick={toggleQRCode}>
              OR YOU CAN USE QR CODE
            </div>
            {showQR && (
              <div className="qr-code">
                <img src={placeholderQRCode} alt="WiFi QR Code" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
