import { Component, createResource, createSignal } from 'solid-js';
import stix from './stix.module.css'
const getData = async () => (await fetch("http://35.233.192.225/")).json();
const App: Component = () => {
  const [score, setScore] = createSignal(0);
  const [long, setLong] = createSignal("TEST 420P");
  const [short, setShort] = createSignal("TEST 69C");
  const [direction, setDirection] = createSignal("up");
  const [target, setTarget] = createSignal(390);
  const [data, setData] = createSignal("");
  const [Data] = createResource(data, getData);
  
  const updateScore = () => setScore(Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1));
  const updateLong = () => setLong(Math.random() > 0.5 ? "TEST 420P" : "TEST 69C");
  const updateShort = () => setShort(Math.random() > 0.5 ? "TEST 420P" : "TEST 69C");
  const updateDirection = () => setDirection(Math.random() > 0.5 ? "up" : "down");
  const updateTarget = () => setTarget(direction() === "up" ? 420 : 390);
  const updateData = () => setData(JSON.stringify(Data(), null, 2));
  setInterval(() => {
    updateScore();
    updateLong();
    updateShort();
    updateDirection();
    updateTarget();
    updateData();
  }, 1000);
  

  return (
    <> 
      <div class={stix.navbar}>
        <p class={stix.navheader}>Gamma Assisted Momentum Engine</p>
        <p class={stix.navbox}>Game Score: <span class={stix.codebox}> { score() } / 200 </span></p>
        <p class={stix.navbox}>Dealer Short: <span class={stix.codebox}> { short() } </span></p>
        <p class={stix.navbox}>Dealer Long: <span class={stix.codebox}> { long() } </span></p>
        <p class={stix.navbox}>Direction: <span class={stix.codebox}> { direction() } </span></p>
        <p class={stix.navbox}> { score() >= 0 ? "Long gamma is sustaining" : "Short gamma is reversing"
} momentum { direction()} towards { target() } </p>
      </div>
      <div>
        <span>{ Data.loading && "Loading.." }</span>
        <pre>{ data() }</pre>
      </div>
    </>
  );
};

export default App;
