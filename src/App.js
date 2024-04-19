import {Intro} from "./Routes/intro/Intro.js";
import {Place} from "./Routes/places/Place.js";
import {Special} from "./Routes/specials/Special.js";
import {Quote} from "./Routes/quotes/Quote.js";
import {Footer} from "./Routes/footer/Footer.js";
function App() {
  return (
    <div>
    <Intro></Intro>
    <Place></Place>
    <Special></Special>
    <Quote></Quote>
    <Footer></Footer>
    </div>
  );
}

export default App;
