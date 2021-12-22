


import '../../CSS/adminCustomer/orderedList.css';


function OrderedList () {

    return(
    <div className="ordered-list_container">
    
    <div className="order-detail-box">
    <div className="order-box">
        <p>Numero </p>
        <p>32156</p>
    </div>

    <div className="order-box">
        <p>Date</p>
        <p>08/12/2021</p>
    </div>

    <div className="order-box">
        <p>Montant</p>
        <p>900€</p>

    </div>

    <div className="order-box">
        <p>Paiement</p>
        <p>Carte Bancaire</p>
    </div>

    </div>

    <div className="btn-detail-order">
        <button className='btn-detail'>Detail</button>
        <button className='btn-bill'> Facture</button>
    </div>

    </div>
    )
}

export default OrderedList;