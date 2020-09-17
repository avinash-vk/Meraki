import React from 'react';
import BottomNav from './components/TempNavbar';
import Man2 from './assets/man2.jpg'
import { makeStyles } from '@material-ui/core/styles';
import SpeedDials from './components/floatingbutton'
import './storyview.css'
const Story = () => {
  return <div>
    <div>
    <img src={Man2} className="cover first-col">
    </img>
    <SpeedDials className="SpeedDial" />
    <br></br>
    </div>
    
    <div className="coverheader">
     <br></br>
     <br></br>
    <text class="maintitle">Dinesh,65,Male</text><br></br>
    <text className="quotes">“</text>
    <text className="subtitle">Muhammed Noushad drinks the ginger-lemon-honey tea prepared by monks at Sera Jey Monastic University in Bylakuppe and reflects on the importance of The Way of Tea in Buddhist paths.</text>
    <text className="quotes">”</text>
    <br>
    </br>
    <div style={{marginTop:"2vh"}}>
    <text className="story">
    Everyone seems to have a chai story – a favorite chai wallah, a unique recipe discovered in the alleys of a crowded market, or memories of a profound conversation with a new friend made over a hot cup.
    The Yiga Choeling Cultural Center of Sera Jey Buddhist monastery has a small tea shop in front of it, a round-shaped hut that opens only in the evening. In the beautifully landscaped meadow, you see monks sitting and sipping tea. Away from the tourist hustle bustle of the Bylakkuppe golden temple and the adjacent Tibetan market, this area is not known to many people. Most of the visitors see the golden temple and return. Just three kilometers interior, you find Sera Jey and Sera Mey monastic universities, exquisitely painted temples, libraries and typical Tibetan streets. An extraordinarily peaceful place. Suddenly you feel a touch of magical realism, as if you are in another country, remote and exotic, exploring through its exiled traditions.
    The Yiga Choeling Cultural Center of Sera Jey Buddhist monastery has a small tea shop in front of it, a round-shaped hut that opens only in the evening. In the beautifully landscaped meadow, you see monks sitting and 
    Everyone seems to have a chai story – a favorite chai wallah, a unique recipe discovered in the alleys of a crowded market, or memories of a profound conversation with a new friend made over a hot cup.

The Yiga Choeling Cultural Center of Sera Jey Buddhist monastery has a small tea shop in front of it, a round-shaped hut that opens only in the evening. In the beautifully landscaped meadow, you see monks sitting and sipping tea. Away from the tourist hustle bustle of the Bylakkuppe golden temple and the adjacent Tibetan market, this area is not known to many people. Most of the visitors see the golden temple and return. Just three kilometers interior, you find Sera Jey and Sera Mey monastic universities, exquisitely painted temples, libraries and typical Tibetan streets. An extraordinarily peaceful place. Suddenly you feel a touch of magical realism, as if you are in another country, remote and exotic, exploring through its exiled traditions.

The Yiga Choeling Cultural Center of Sera Jey Buddhist monastery has a small tea shop in front of it, a round-shaped hut that opens only in the evening. In the beautifully landscaped meadow, you see monks sitting and 
Everyone seems to have a chai story – a favorite chai wallah, a unique recipe discovered in the alleys of a crowded market, or memories of a profound conversation with a new friend made over a hot cup.

The Yiga Choeling Cultural Center of Sera Jey Buddhist monastery has a small tea shop in front of it, a round-shaped hut that opens only in the evening. In the beautifully landscaped meadow, you see monks sitting and sipping tea. Away from the tourist hustle bustle of the Bylakkuppe golden temple and the adjacent Tibetan market, this area is not known to many people. Most of the visitors see the golden temple and return. Just three kilometers interior, you find Sera Jey and Sera Mey monastic universities, exquisitely painted temples, libraries and typical Tibetan streets. An extraordinarily peaceful place. Suddenly you feel a touch of magical realism, as if you are in another country, remote and exotic, exploring through its exiled traditions.

The Yiga Choeling Cultural Center of Sera Jey Buddhist monastery has a small tea shop in front of it, a
    </text>
    </div>
    </div>
   <BottomNav></BottomNav>  
  </div>;
};

export default Story;
