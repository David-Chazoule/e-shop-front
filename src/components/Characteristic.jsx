





function Characteristic (props) {


    function detail() {
        if ( props.productInfos.type ==="smartphone") {
            return < div className="line-detail-case-b">
                        <div className="line-a">
                            <p className="info-detail">Taille écran</p>
                        </div>
                        <div className="line-b">
                            <p className="info-detail">Système d'exploitation</p>
                         </div>
                        <div className="line-a">
                            <p className="info-detail">stockage</p>
                        </div>
                        <div className="line-b">
                            <p className="info-detail">memoire vive</p>
                        </div>
                   </ div>

        }  else if (props.productInfos.type ==="casque VR") {
            return <div className="line-detail-case-b">
                        <div className="line-a">
                            <p className="info-detail">taille de l'écran</p>
                        </div>
                        <div className="line-b">
                            <p className="info-detail">Frequence d'affichage</p>
                         </div>
                         <div className="line-a">
                            <p className="info-detail">Champ de vision</p>
                        </div>
                            <div className="line-b">
                            <p className="info-detail">Poid</p>
                        </div>
                    </div>

        } else if (props.productInfos.type ==="casque audio") {
            return <div className="line-detail-case-b">
                        <div className="line-a">
                            <p className="info-detail">Impétance</p>
                        </div>
                        <div className="line-b">
                            <p className="info-detail">Connection sans fil</p>
                        </div>
                        <div className="line-a">
                            <p className="info-detail">Autonomie</p>
                        </div>
                        <div className="line-b">
                            <p className="info-detail">Poid</p>
                        </div>
                    </div>

        } else if (props.productInfos.type ==="ecran") {
            return <div className="line-detail-case-b">
                        <div className="line-a">
                            <p className="info-detail">Taille de l'écran</p>
                        </div>
                        <div className="line-b">
                            <p className="info-detail">résolution</p>
                        </div>
                        <div className="line-a">
                            <p className="info-detail">Smart TV</p>
                        </div>
                         <div className="line-b">
                            <p className="info-detail">écran incurvé</p>
                         </div>
                    </div>

        } else if (props.productInfos.type ==="ordinateur") {
            return <div className="line-detail-case-b">
                        <div className="line-a">
                            <p className="info-detail">Taille de l'écran</p>
                        </div>
                        <div className="line-b">
                            <p className="info-detail">Processeur</p>
                        </div>
                         <div className="line-a">
                            <p className="info-detail">Stockage</p>
                         </div>
                         <div className="line-b">
                            <p className="info-detail">Mémoire vive</p>
                        </div>
                    </div>

        } else if (props.productInfos.type==="jeu") {
            return <div className="line-detail-case-b">
                        <div className="line-a">
                            <p className="info-detail-a">Plateforme</p>
                        </div>
                        <div className="line-b">
                            <p className="info-detail-b">Genre</p>
                        </div>
                        <div className="line-a">
                            <p className="info-detail-a">Date de sortie</p>
                        </div>
                        <div className="line-b">
                            <p className="info-detail-b">Espace minimum</p>
                        </div>
                    </div>
       }
    }

return (
     <div>

      {detail()}


     </div>
      )

}

export default Characteristic;