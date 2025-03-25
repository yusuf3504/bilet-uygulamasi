import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import './Ucak.css'


export default function Ucak() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('');

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    // Arama işlemi burada yapılacak
    console.log('Arama yapılıyor:', { from, to, departureDate, returnDate });
  };
  const [showAnimation, setShowAnimation] = useState(false);
  const [errors, setErrors] = useState({});

  const handleTicketPurchase = () => {
    const newErrors = {};

    if (!from) newErrors.from = "Bu alan boş bırakılamaz.";
    if (!to) newErrors.to = "Bu alan boş bırakılamaz.";
    if (!departureDate) newErrors.departureDate = "Bu alan boş bırakılamaz.";
    if (!returnDate) newErrors.returnDate = "Bu alan boş bırakılamaz.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 3000);
    }
  };
  return (
    <div className='ucak'>
      <div className="search-form">
        <div className="form-group">
          <label htmlFor="from">Nereden</label>
          <input
            type="text"
            id="from"
            className={errors.from ? "error" : ""}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="İl/İlçe"
          />
          {errors.from && <span className="alert-message">{errors.from}</span>}
        </div>
        <button className="swap-button" onClick={handleSwap}> <FontAwesomeIcon icon={faExchangeAlt} /></button>
        <div className="form-group">
          <label htmlFor="to">Nereye</label>
          <input
            type="text"
            id="to"
            className={errors.to ? "error" : ""}
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="İl/İlçe"
          />
          {errors.to && <span className="alert-message">{errors.to}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="departureDate">Gidiş Tarihi</label>
          <input
            type="date"
            id="departureDate"
            className={errors.departureDate ? "error" : ""}
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />{errors.departureDate && <span className="alert-message">{errors.departureDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Dönüş Tarihi</label>
          <input
            type="date"
            id="returnDate"
            className={errors.returnDate ? "error" : ""}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
          {errors.returnDate && <span className="alert-message">{errors.returnDate}</span>}
        </div>
        <button className="search-button" onClick={handleTicketPurchase}>Ara</button>
        {showAnimation && (
          <div className="ticket-animation">
            <div className="ticket">
              🎟️Uygun Bilet Aranıyor...
            </div>
          </div>
        )}
      </div>
      <h2 className='başlık'>Türkiye'nin Önde Gelen Uçak Bileti Sitesi</h2>
      <div class="kart">
        <ul class="h-list">
          <div className="box">
            <img className='box-1' src="https://www.egan.com.tr/Uploads/Files//cagrimerkeziresim.png"></img>
            <h3 className='başlık'>
              7/24 Müşteri Hizmetleri
            </h3>
            <p className='paragraf'>
              biletdükkanı.com ve bilet dükkanı mobil uygulamaları üzerinden yapacağınız tüm işlemlerde müşteri hizmetleri ekibimiz 7/24 yanınızda. Bir tıkla destek ekibimize bağlanabilirsiniz.
            </p>
          </div>
          <div className="box">
            <img className='box-2' src="https://www.mevlidhediyesi.com/files/cap/images/guvenli-odeme.png"  ></img>
            <h3 className='başlık'>Güvenli Ödeme</h3>
            <p className='paragraf'>
              Tüm otobüs bilet alım işlemlerinizi ister evinizden, ister ofisinizden ya da dilerseniz cep telefonunuzdan kolay, hızlı ve güvenilir bir şekilde gerçekleştirebilirsiniz.
            </p>
          </div>
          <div className="box">
            <img className='box-3' src="https://yesilpvc.com/wp-content/uploads/2022/04/butce-dostu.png"></img>
            <h3 className='başlık'>Bütçe Dostu</h3>
            <p className='paragraf'>
              bilet dükkanı size tüm firmaların otobüs biletlerini sorgulama ve karşılaştırma imkanı sunar. Bu sayede bütçenize uygun otobüs biletini rahatlıkla bulabilir ve satın alabilirsiniz.
            </p>
          </div>
          <div className="box">
            <img className='box-4' src="https://www.webtekno.com/images/editor/default/0003/50/41256cafff30059b92d451f18c049f1d637a9a89.jpeg"></img>
            <h3 className='başlık'>Seçkin Firmalar</h3>
            <p className='paragraf'>
              bilet dükkanı olarak seçkin  firmaları sizler için bir araya getirdik. Firmaların biletlerini bilet dükkanı'nda karşılaştırabilir, uygun  biletinizi bulabilir ve çevrimiçi bir şekilde satın alabilirsiniz.
            </p>
          </div>
        </ul>
      </div>
      <div className="footerMenus">
        <div className="shpadding-reset"><a href="/kahve-c-1798" class="">
          <span className="üstbaslık">Şehirler</span></a>
          <ul className="footerMenu footerMenu-1 hidden-md-down">
            <li><a href="/turk-kahvesi-c-3400" class="">İstanbull</a></li>
            <li><a href="/kapsul-kahveler-c-3486" class="">Ankara</a></li>
            <li><a href="/filtre-kahve-c-3401" class="">İzmir</a></li>
            <li><a href="/yoresel-kahve-c-3402" class="">Antalya</a></li>
            <li><a href="/espresso-c-3403" class="">Trabzon</a></li>
          </ul>
        </div>

        <div class="shpadding-reset1"><a href="/aksesuar-c-1802" class=""><span className="üstbaslık">Bize katılın
        </span></a>
          <ul className="footerMenu footerMenu-1 hidden-md-down">
            <li><a href="/kutu-cikolata-c-3408" class="">Şubemiz olun</a></li>
            <li><a href="/atistirmalik-cikolata-c-3409" class="">Ekibimize Katılın</a></li>

          </ul>
        </div>
        <div className="shpadding-reset1"><a href="/kesfet/hakkimizda" class="">
          <span className="üstbaslık">HAKKIMIZDA</span></a>
          <ul className="footerMenu footerMenu-5 hidden-md-down">
            <li><a href="/kesfet/hakkimizda" class="" rel="nofollow"> Hikayemiz</a></li>
            <li><a href="/kesfet/kurumsal-cozumler" class="" rel="nofollow">Kurumsal Çözümler</a></li>
            <li><a href="/kesfet/kariyer" class="" rel="nofollow">Kariyer</a></li>
            <li><a href="/blog" class="">Blog</a></li>
            <li><a href="/kesfet/hakkimizda#degerlerimiz" class="" rel="nofollow">Değerlerimiz</a></li>
          </ul>
        </div>
        <div className="shpadding-reset1"><a href="/sss" class=""><span class="üstbaslık">YARDIM</span></a>
          <ul className="footerMenu footerMenu-5 hidden-md-down">
            <li><a href="/sss/uyelik-s-26" class="" rel="nofollow">Üyelik</a></li>
            <li><a href="/sss/siparis-islemleri-s-23" class="" rel="nofollow">Sipariş İşlemleri</a></li>
            <li><a href="/sss/odeme-islemleri-s-21" class="" rel="nofollow">Ödeme İşlemleri</a></li>
            <li><a href="/sss/teslimat-sureci-s-25" class="" rel="nofollow">Teslimat Süreci</a></li>
            <li><a href="/sss/iletisim-s-31" class="" rel="nofollow">İletişim</a></li>
            <li><a href="/sss/iletisim" class="">İletişim Formu</a></li>
          </ul>
        </div>
      </div>
      <div className="menu-share">
        <div className="share">
          <p>İletişim İçin:</p>
          <a href="https://www.facebook.com"><i class="bi bi-facebook"></i></a>
          <a href="https://twitter.com"><i class="bi bi-twitter"></i></a>
          <a href="https://www.instagram.com"><i class="bi bi-instagram"></i></a>
          <a href="https://www.whatsapp.com"><i class="bi bi-whatsapp"></i></a>
        </div>

        <div className="credit">
          created by <span>Yusuf Yaşar</span> | all rights reserved
        </div>
      </div>
    </div>


  )
}
