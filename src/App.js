import {Intro} from "./Routes/intro/Intro.js";
import {Place} from "./Routes/places/Place.js";
import {Special} from "./Routes/specials/Special.js";
import {Quote} from "./Routes/quotes/Quote.js";
import {Footer} from "./Routes/footer/Footer.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
    <Intro></Intro>
    <Place></Place>
    <Special></Special>
    <Quote></Quote>
    <Footer></Footer>
    <ToastContainer
    position="top-center"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    </div>
  );
}

export default App;
