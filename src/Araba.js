import React, { useState } from 'react';


import './Araba.css'
const validateForm = () => {
    // Form doğrulama işlemleri burada yapılır
    console.log("Form doğrulandı");
    return true; // Doğrulama başarılıysa true döndür
};

export default function Araba() {
    
    const [departureDate, setDepartureDate] = useState('')
    const [returnDate, setReturnDate] = useState('');
    return (
        <section className="search">
            <div className="container">
                <div className="search-box">
                    <div className="search-box-bg search-form">
                        <form id="dailySearch" action="/arac-ara" method="get" className="formdiv" onSubmit={validateForm}>
                            <input type="hidden" name="PickupPointName" id="PickupPointName" value="İzmir Otogarı" />
                            <input type="hidden" id="vendorName" name="Vendor" value="" />
                            <div className="form-group PickupPoint">
                                <label className='yazılar' >Alış Yeri</label>
                                <select id="pickupLocations" name="PickupPoint" data-val="true" data-val-required="The PickupPoint field is required." className="select2-hidden-accessible">
                                    <option value="">Şehir veya Havalimanı</option>
                                    <option value="201" selected>
                                        İzmir Otogarı
                                    </option>
                                </select>
                            </div>



                            <input type="hidden" name="DropPointName" id="DropPointName" value="İzmir Otogarı" />
                            <div id="dropoffLocationsHiddenShow" className="form-group dropoffLocations">
                                <label className='yazılar' >Bırakış Yeri</label>
                                <select id="dropoffLocations" name="DropPoint" data-val="true" data-val-required="The DropPoint field is required." className="select2-hidden-accessible">
                                    <option value="">Şehir veya Havalimanı</option>
                                    <option value="201" selected>
                                        İzmir Otogarı
                                    </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className='yazılar' htmlFor="departureDate">Alış Tarihi</label>
                                <input
                                    type="date"
                                    id="departureDate"
                                    value={departureDate}
                                    onChange={(e) => setDepartureDate(e.target.value)}
                                />
                            </div>

                            <div className="form-group PickupTime">
                                <label className='yazılar'>Alış Saati</label>
                                <select id="PickupTime" name="PickupTime" readOnly placeholder="Alış Saati" className="select2-hidden-accessible">
                                    <option></option>
                                    <option value="00:00">00:01</option>
                                    <option value="00:30">00:30</option>
                                    <option value="01:00">01:00</option>
                                    <option value="01:30">01:30</option>
                                    <option value="02:00">02:00</option>
                                    <option value="02:30">02:30</option>
                                    <option value="03:00">03:00</option>
                                    <option value="03:30">03:30</option>
                                    <option value="04:00">04:00</option>
                                    <option value="04:30">04:30</option>
                                    <option value="05:00">05:00</option>
                                    <option value="05:30">05:30</option>
                                    <option value="06:00">06:00</option>
                                    <option value="06:30">06:30</option>
                                    <option value="07:00">07:00</option>
                                    <option value="07:30">07:30</option>
                                    <option value="08:00">08:00</option>
                                    <option value="08:30">08:30</option>
                                    <option value="09:00">09:00</option>
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:30">16:30</option>
                                    <option value="17:00">17:00</option>
                                    <option value="17:30">17:30</option>
                                    <option value="18:00">18:00</option>
                                    <option value="18:30">18:30</option>
                                    <option value="19:00">19:00</option>
                                    <option value="19:30">19:30</option>
                                    <option value="20:00">20:00</option>
                                    <option value="20:30">20:30</option>
                                    <option value="21:00">21:00</option>
                                    <option value="21:30">21:30</option>
                                    <option value="22:00">22:00</option>
                                    <option value="22:30">22:30</option>
                                    <option value="23:00">23:00</option>
                                    <option value="23:30">23:30</option>
                                    <option value="23:45">23:59</option>
                                </select>
                            </div>


                            <div className="form-group">
                                <label className='yazılar' htmlFor="returnDate">Bırakış Tarihi</label>
                                <input
                                    type="date"
                                    id="returnDate"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                />
                            </div>

                            <div className="form-group DropTime">
                                <label className='yazılar'>Bırakış Saati</label>
                                <select id="DropTime" name="DropTime" readOnly placeholder="Bırakış Saati" className="select2-hidden-accessible">
                                    <option selected></option>
                                    <option value="00:00">00:01</option>
                                    <option value="00:30">00:30</option>
                                    <option value="01:00">01:00</option>
                                    <option value="01:30">01:30</option>
                                    <option value="02:00">02:00</option>
                                    <option value="02:30">02:30</option>
                                    <option value="03:00">03:00</option>
                                    <option value="03:30">03:30</option>
                                    <option value="04:00">04:00</option>
                                    <option value="04:30">04:30</option>
                                    <option value="05:00">05:00</option>
                                    <option value="05:30">05:30</option>
                                    <option value="06:00">06:00</option>
                                    <option value="06:30">06:30</option>
                                    <option value="07:00">07:00</option>
                                    <option value="07:30">07:30</option>
                                    <option value="08:00">08:00</option>
                                    <option value="08:30">08:30</option>
                                    <option value="09:00">09:00</option>
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:30">16:30</option>
                                    <option value="17:00">17:00</option>
                                    <option value="17:30">17:30</option>
                                    <option value="18:00">18:00</option>
                                    <option value="18:30">18:30</option>
                                    <option value="19:00">19:00</option>
                                    <option value="19:30">19:30</option>
                                    <option value="20:00">20:00</option>
                                    <option value="20:30">20:30</option>
                                    <option value="21:00">21:00</option>
                                    <option value="21:30">21:30</option>
                                    <option value="22:00">22:00</option>
                                    <option value="22:30">22:30</option>
                                    <option value="23:00">23:00</option>
                                    <option value="23:30">23:30</option>
                                    <option value="23:45">23:59</option>
                                </select>
                            </div>
                            <div>
                                <button className='button-araç'>Kiralık Araç Bul</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}
