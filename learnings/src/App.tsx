import './App.css';
import { Routes, Route } from 'react-router-dom';
import Button from './Typescript/Components/Button';
import Container from './Typescript/Components/Container';
import Box from './Typescript/Components/Context/Box';
import Greet from './Typescript/Components/Greet';
import Heading from './Typescript/Components/Heading';
import Input from './Typescript/Components/Input';
import Oscar from './Typescript/Components/Oscar';
import Person from './Typescript/Components/Person';
import PersonList from './Typescript/Components/PersonList';
// import Counter from './Typescript/Components/State/Counter';
// import User from './Typescript/Components/State/User';
import Status from './Typescript/Components/Status';
import { UserContextProvider } from './Typescript/Components/Context/UserContext';
import User from './Typescript/Components/Context/User';
import Mutableref from './Typescript/Components/Ref/MutableRef';
// import Counter from './Typescript/Components/Class/Counter';
import Private from './Typescript/Components/Auth/Private';
import List from './Typescript/Components/Generics/List';
import RandomNumbers from './Typescript/Components/Restriction/RandomNumbers';
import Toast from './Typescript/Components/TemplateLiterals/Toast';
import CustomButton from './Typescript/Components/HTML/Button';
import CustomInput from './Typescript/Components/HTML/Input';
import CustomComponent from './Typescript/Components/HTML/CustomComponent';
import Test from './Typescript/Components/Polymorphic/Test';
import Application from './Testing/Application/Application';
import Skills from './Testing/Skills/Skills';
import Counter from './Testing/Counter/Counter';
import AppProviders from './Testing/Providers/app-providers';
import MuiMode from './Testing/mui/mui-mode';
import Home from './Router/Home';
// import About from './Router/About';
import Navbar from './Router/Navbar';
import OrderSummary from './Router/OrderSummary';
import NoMatch from './Router/NoMatch';
import Products from './Router/Products';
import FeaturedProducts from './Router/FeaturedProducts';
import NewProducts from './Router/NewProducts';
import { Users } from './Router/Users';
import { UserDetails } from './Router/UserDetails';
import { Admin } from './Router/Admin';
import { lazy, Suspense } from 'react';
import Profiles from './Router/Profiles';
import { AuthProvider } from './Router/Auth';
import Login from './Router/Login';
import RequireAuth from './Router/RequireAuth';
import { CakeView } from './Redux-toolkit/features/cake/CakeView';
import { IcecreamView } from './Redux-toolkit/features/icecream/IcecreamView';
import { UserView } from './Redux-toolkit/features/user/UserView';
import ClassCounter from './Hooks/ClassCounter';
import HookCounter from './Hooks/HookCounter';
import HookCounterTwo from './Hooks/HookCounterTwo';
import HookCounterThree from './Hooks/HookCounterThree';

const About = lazy(() => import('./Router/About'));

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
    <AuthProvider>
      <AppProviders>
        {/* <div className="App">
          Learn React
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
          {/* <User /> */}
          {/* <Counter /> */}
          {/* <Box />
          <UserContextProvider>
            <User />
          </UserContextProvider>
          <Mutableref /> */}
          {/* <Counter message="The count value is " /> */}
          {/* <Private isLoggedIn={true} component={User} /> */}
          {/* <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)} />
          <List items={[1,2,3]} onClick={(item) => console.log(item)} /> */}
          {/* <List items={[{ id: 1, first: 'Bruce', last: 'Wayne' }, { id: 2, first: 'Clark', last: 'Kent' }, { id: 3, first: 'Princess', last: 'Diana' }]} onClick={(item) => console.log(item)} />
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
          <Application />
          <Skills skills={['HTML', 'CSS', 'JS', 'React']} />
          <Counter />
          <MuiMode />
        </div>  */}
        {/* <Navbar /> */}
        {/* <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<Suspense fallback='Loading....'> <About /> </Suspense>}></Route>
          <Route path='summary' element={<OrderSummary />}></Route>
          <Route path='*' element={<NoMatch />}></Route>
          <Route path='products' element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />}/>
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
          </Route>
          <Route path='profile' element={<RequireAuth><Profiles /></RequireAuth>} />
          <Route path='login' element={<Login />} />
        </Routes> */}
        {/* <CakeView />
        <IcecreamView />
        <UserView /> */}
        <HookCounter />
        <HookCounterTwo />
        <HookCounterThree />
      </AppProviders>
    </AuthProvider>
  );
}

export default App;
