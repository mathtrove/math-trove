
import './App.css';

import { title,topics,  subTopics, colors } from './DataBase';
import Hero from './comps/Hero';
import MathSec from './comps/MathSec';
// import LoadingScrn from './comps/smallComps/LoadingScrn';

function App() {
  return (
    <div className="App">
      <Hero heading={title}/>
      <main className='main'>
        <MathSec topic={topics[0]} subTopic={subTopics[0]} color={colors[0]}/>
        <MathSec topic={topics[1]} subTopic={subTopics[1]} color={colors[1]}/>
        <MathSec topic={topics[2]} subTopic={subTopics[2]} color={colors[2]}/>
      </main>
    </div>
  );
}

export default App;
