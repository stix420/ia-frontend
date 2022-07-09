import { Component, createResource, createSignal } from 'solid-js';
import stix from './stix.module.css'

const getData = async () => (await fetch("http://35.233.192.225/")).json();


const App: Component = () => {
  const [Data, { refetch }] = createResource(getData);
  
  return (
    <> 
      <div class={stix.navbar}>
        <p class={stix.navheader}>Gamma Assisted Momentum Engine</p>
        <p class={stix.navbox}>Game Score: <span class={stix.codebox}> { Data()?.gameScore } / 200 </span></p>
        <p class={stix.navbox}>Dealer Short: <span class={stix.codebox}> { Data()?.dealerShort } </span></p>
        <p class={stix.navbox}>Dealer Long: <span class={stix.codebox}> { Data()?.dealerLong } </span></p>
        <p class={stix.navbox}>Direction: <span class={stix.codebox}> { Data()?.direction } </span></p>
        <p class={stix.navbox}> { Data()?.gameScore >= 0 ? "Long gamma is sustaining" : "Short gamma is reversing"
} momentum { Data()?.direction} towards { Data()?.target } </p>
      </div>
    </>
  );
};

export default App;

