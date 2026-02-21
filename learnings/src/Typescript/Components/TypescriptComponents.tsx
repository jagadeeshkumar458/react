import React from 'react'
import Button from './Button';
import Container from './Container';
import Box from './Context/Box';
import Greet from './Greet';
import Heading from './Heading';
import Input from './Input';
import Oscar from './Oscar';
import Person from './Person';
import PersonList from './PersonList';
// import Counter from './State/Counter';
// import User from './State/User';
import Status from './Status';
import { UserContextProvider } from './Context/UserContext';
import User from './Context/User';
import Mutableref from './Ref/MutableRef';
// import Counter from './Class/Counter';
import Private from './Auth/Private';
import List from './Generics/List';
import RandomNumbers from './Restriction/RandomNumbers';
import Toast from './TemplateLiterals/Toast';
import CustomButton from './HTML/Button';
import CustomInput from './HTML/Input';
import CustomComponent from './HTML/CustomComponent';
import Test from './Polymorphic/Test';


function TypescriptComponents() {
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
    <div>
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
        {/* <Counter /> */}
        <Box />
        <UserContextProvider>
            <User />
        </UserContextProvider>
        <Mutableref />
        {/* <Counter message="The count value is " /> */}
        <Private isLoggedIn={true} component={User} />
        {/* <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)} />
        <List items={[1,2,3]} onClick={(item) => console.log(item)} /> */}
        <List items={[{ id: 1, first: 'Bruce', last: 'Wayne' }, { id: 2, first: 'Clark', last: 'Kent' }, { id: 3, first: 'Princess', last: 'Diana' }]} onClick={(item) => console.log(item)} />
        <RandomNumbers value={10} isPositive />
        <RandomNumbers value={-10} isNegative />
        <RandomNumbers value={0} isZero />
        <Toast position='top-left' />
        <CustomButton variant='primary' onClick={() => console.log('Button clicked')} >Custom Button</CustomButton>
        <CustomInput type='text' value='' onChange={() => console.log('Input changed')} />
        <CustomComponent name='Custom Component' isLoggedIn/>
        <Test as="h1" size='lg' >Heading</Test>
        <Test as="p" size='md' color='secondary'>Paragraph</Test>
        <Test as="label" htmlFor='someId' size='sm' color='secondary'>Label</Test>
    </div>
  )
}

export default TypescriptComponents