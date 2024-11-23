import '../css/style.css'

import Banner from "../img/banner.jpg"
import FreshFood from "../img/portfolio/fresh-food.jpg"
import Akira from "../img/portfolio/restaurant-japonais.jpg"
import BienEtre from "../img/portfolio/espace-bien-etre.jpg"
import SEO from "../img/portfolio/seo.jpg"
import API from "../img/portfolio/coder.jpg"
import Maquette from "../img/portfolio/screens.jpg"


function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt={props.alt}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className='card-footer'>
                <small className='text-body-secondary'>{props.footer}</small>
            </div>
        </div>
    )
}

export default function Portfolio() {
    return (
        <div>
            <img src={Banner} alt="Bannière bleue" className='banner'/>
            <section className="container title">
                <h1>Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations</p>
            </section>
            <section className="container cards">
                <Card img={FreshFood} alt="Image d'un panier de nourriture fraiche" title="Fresh Food" description="Site de vente de produits frais en ligne" footer="Site réalisé avec PHP et MySQL"/>
                
                <Card img={Akira} alt="Image d'un plateau de nourritures japonaises" title="Restaurant Akira" description="Site de vente de produits frais en ligne" footer="Site réalisé avec WordPress"/>

                <Card img={BienEtre} alt="Statue de Bouddha et cairn" title="Espace bien-être" description="Site de vente de produits frais en ligne" footer="Site réalisé avec LARAVEL"/>

                <Card img={SEO} alt="Regroupement de mots lié au Web" title="SEO" description="Amélioration du référencement d'un site e-commerce" footer="Utilisation des outils SEO"/>

                <Card img={API} alt="Image montrant de la programmation sur un écran" title="Création d'une API" description="Création d'une API RESTFULL publique" footer="PHP - SYMPHONY"/>

                <Card img={Maquette} alt="Bureau en bois avec une tablette et deux ordinateurs" title="Maquette d'un site web" description="Création du prototype d'un site" footer="Réalisé avec FIGMA"/>
            </section>
        </div>
    )
}