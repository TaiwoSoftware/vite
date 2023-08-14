import './App.css'
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Header from './Header';
import ColorList from './ColorList';
function App() {
  return <div>
  <Header color='magenta' text="welcome" />
  <Header color='teal' text='Taiwo' />
  <DoubleDice />
  <DoubleDice />
  <DoubleDice />
  <ColorList colors={
    ['red', 'green', 'blue', 'yellow', ]
  }/>

  {/* <ListPicker  values={[1, 2, 3,4]}/>
  <ListPicker  values={['a', 'b', 'c','d']}/> */}
    {/* <Greeter  name="Taiwo" from="Tech bro"/> */}
    {/* <Die numSides = {20} />
    <Die numSides = {4}/>
    <Die  numSides = {10}/> */}
  </div>
}

export default App
