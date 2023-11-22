import React from 'react';
import Banner from './components/banner';
import Section from './components/section';
import flute from './components/flute.jpg';
import orch from './components/orch.jpg';
import kir from './components/kir.jpg';
import paper from './components/paper.jpg';
function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${paper})`}}>
      <header className="App-header">
        <Banner/>
        <h1>My Musical Journey</h1>
        <p>Welcome to my website! Here, you'll discover my passion for music and my journey through various instruments.</p>
      </header>
      <Section image= {flute}
       header="Flute" 
       text="My musical journey began in when i started elementary school. I had spent learning the 
       basic flute for 2 years and later was able to join our school orchestra where I continued playing the flute.
       Our schools orchestra was relatively small, therefore there weren't many other instruments.
       In grade 4, I was then given the oppurtunity to play tenor as well. The experience of playing in harmony with others was 
       truly enriching and laid the foundation for my love of music." />

      <Section image= {orch}
       header="Orchestra" 
       text="After elementary school, I joined the middle school orchestra
       after they had determined what insrument I could play as they tested 
       every students breathing technique. I wasn't able to get to play the concert
       flute as I wanted to because of a mistunderstanding during the try outs.
       Therefore, I had to play whatever instrument was not take and it ended up to 
       be the tuba. In the beginning, I was very against playing but later after performances
       I realized that the tuba is an important part of the orchestra." />
      
      <Section image={kir}
      header ="Indian Instruments and Classical Music"
      text= "Being a lover of diverse musical styles, I've also ventured into playing Indian instruments.
       I play the harmonium, tabla, and sitar, each of which offers a unique sound and rhythm that adds to
       the richness of Indian classical music. Classical music holds a special place in my heart. Its timeless 
       compositions and intricate melodies provide endless inspiration for my own musical journey." />
    </div>
  );
}

export default App;