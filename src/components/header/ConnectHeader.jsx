import user from '../../img/user.png'

import  '../../CSS/connectHeader.css'

function ConnectHeader(){
    return(
        <div className="connect-header-container">
            <img className='icon-user' src={user} alt="" />
            <div className="btn-connect-box">
            <button className="btn-connect">Connection</button>
            <button className="btn-connect">inscription</button>
            </div>

        </div>
    )
}

export default ConnectHeader;