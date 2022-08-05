import "../../CSS/adminCustomer/contactDetails.css";

function ContactDetails() {
  return (
    <div className="contact-details_container">
      <div className=" billing-adress-detail_container">
        <h1>Adresse de facturation</h1>
        <div className="detail">
        <div className="name-bill-detail">
          <p>David Chaz</p>
        </div>
        <div className="adress-bill-detail">
          <p>8 rue du futur</p>
        </div>
        <div className="city-bill-detail">
          <p>92000 Nanterre</p>
        </div>
        <div className="phone-bill-detail">
          <p>0147291006</p>
        </div>
        <div className="email-bill-detail">
          <p>d.chazoule@gmail.com</p>
        </div>
        </div>
        <div className="btn-change-billing-detail">
          <button className="btn-change-billing">Modifier</button>
        </div>
      </div>

      <div className=" billing-delivery-detail_container">
        <h1>Adresse de livraison</h1>
        <div className="detail">
        <div className="name-delivery-detail">
          <p>David Chaz</p>
        </div>
        <div className="adress-delivery-detail">
          <p>8 rue du futur</p>
        </div>
        <div className="city-delivery-detail">
          <p>92000 Nanterre</p>
        </div>
        <div className="phone-delivery-detail">
          <p>0147291006</p>
        </div>
        <div className="email-delivery-detail">
          <p>d.chazoule@gmail.com</p>
        </div>
        </div>
        <div className="btn-change-delivery-detail">
          <button className="btn-change-delivery">Modifier</button>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
