import './App.css';
import './index.css';

const myBiography = {
  name: 'Dmytro',
  bio: "I want to become programmer, I studying HTML, CSS, JS, Git, React and Typescript, because I want to become Front-End Developer",
  contacts: +380951751831
}

const App = () => (
    <div className="App">
      <p className='biography-description'>

        I'm {myBiography.name}

        <br />

        {myBiography.bio}

        <br />

        <span>My contacts: {myBiography.contacts}</span>

      </p>
    </div>
)


export default App;
