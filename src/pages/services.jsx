import '../style.css'
import Banner from '../img/banner.jpg'

export default function Services() {
    return (
        <div>
            <img src={Banner} alt="#" className='banner'/>
            <section class="container-fluid">
                <h1>Mon offre de services</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
            </section>
            <section class="container-fluid cards">
                <div class="card" style={{width: 18 + 'rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width: 18 + 'rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width: 18 + 'rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>                
        </section>
      </div>
    )
}