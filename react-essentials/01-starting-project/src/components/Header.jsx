import reactImg from '../assets/react-core-concepts.png';

var words = ["Fundamental", "Core", "Crucial"];

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {

    var genNumber = getRandomNumber(words.length);
    var phrase = words[genNumber];

    return (
        <div>
            <header>
                <img src={reactImg} alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    {phrase} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </div>

    )
}

export default Header;