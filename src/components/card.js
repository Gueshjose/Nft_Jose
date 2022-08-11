import './card.css'

const CardEther=()=>{
    return (
    <div className="card">
        <div className="cardHead">
            <img className="equi" src="./images/image-equilibrium.jpg" alt="" />
            <div className='overlay'>
                <div className='overlayB'>               
                </div>
                <img className='viewI' src="./images/icon-view.svg" alt="" />
            </div>
            
        </div>
        <div className="cardBody">
            <h2>Equilibrium #3429</h2>
            <div>
                <p>Our Equilibrium collection promotes balance and calm.</p>
            </div>
            <div className="cardD">
                <div>
                    <img src="./images/icon-ethereum.svg" alt="" />
                    <p className='eth'>0.041ETH</p>
                </div>
               <div>
                    <img src="./images/icon-clock.svg" alt="" />
                    <p>3 days left</p>
               </div>
            </div>

        </div>
        <div className="cardFooter">
            <hr />
            <div>
                <img src="./images/image-avatar.png" alt="" /> 
                <p>Creation of <span>Jules Wyverne</span></p>
            </div>
        </div>
    </div>
    );
   
}

export default CardEther;