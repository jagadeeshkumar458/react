import './App.css';
import Button from './Typescript/Components/Button';
import Container from './Typescript/Components/Container';
import Greet from './Typescript/Components/Greet';
import Heading from './Typescript/Components/Heading';
import Input from './Typescript/Components/Input';
import Oscar from './Typescript/Components/Oscar';
import Person from './Typescript/Components/Person';
import PersonList from './Typescript/Components/PersonList';
import User from './Typescript/Components/State/User';
import Status from './Typescript/Components/Status';

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
      <Status status="loading"/>
      <Heading>Children Props</Heading>
      <Oscar><Heading>Oscar goes to Nolan</Heading></Oscar>
      <Greet name='Jagadeesh' isLoggedIn={true} />
      <Button handleClick={(event, id) => console.log('Button Clicked', event, id)} />
      <Input value="" handleChange={(event) => console.log(event)}/>
      <Container styles={{ border: '1px solid black', padding: '1rem'}}/>
      <User />
    </div>
  );
}

export default App;
