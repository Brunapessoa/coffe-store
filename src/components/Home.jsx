import coffee from '../assets/coffee.jpg';
import snacks from '../assets/snacks.jpg';
import drinks from '../assets/drinks.jpg';


function Home() {
    return (
        <main>
        <a href="">
            <img src={coffee} alt="Coffees Image" />
        </a>
        <a href="">
            <img src={snacks} alt="Snacks Image" />
        </a>
        <a href="">
            <img src={drinks} alt="Drinks Image" />
        </a>
        </main>
    )
}

export default Home;