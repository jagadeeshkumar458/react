import './App.css';
import Greet from './Typescript/Components/Greet';
import Person from './Typescript/Components/Person';
import PersonList from './Typescript/Components/PersonList';

function App() {
  const name = {
    first : 'Bruce',
    last : 'wayne'
  }
  const namesList = [
    {
    first : 'Bruce',
    last : 'wayne'
  },
  {
    first : 'Clark',
    last : 'Kent'
  },{
    first : 'Princess',
    last : 'Diana'
  }
  ]
  return (
    <div className="App">
      <Greet name='Jagadeesh' messageCount={20} isLoggedIn={false}/>
      <Person name={name}/>
      <PersonList names={namesList}/>
    </div>
  );
}

export default App;
