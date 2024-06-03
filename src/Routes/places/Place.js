import "./style.css";
import "./phone.css";
import {Card} from "./Card.js";
export function Place(props){
return(
<div>
	
	<div className="container popular">
		<div className="text-center">
			<h3 className="mt-5">Most popular places</h3>
			<hr></hr>
		</div>
		<div className="row g-3 pop_places">
		<Card h5="Victoria Memorial" p="The Victoria Memorial is a large marble monument on the Maidan in Central Kolkata, having its entrance on the Queen's Way. It was built between 1906 and 1921 by the Government of India. It is dedicated to the memory of Queen Victoria, the Empress of India from 1876 to 1901. " image="image/place/victoria.jpg"/>

		<Card h5="Aquatica Water Park" p="Aquatica is Kolkata’s largest Water Theme Park & Resort & Banquet. Home to thrilling rides, attractions, live events & luxurious resort, Aquatica Banquet Resort & Water Park is the ultimate destination for thrill seekers featuring some of the Kolkata’s most popular roller coasters and waterpark park rides. " image="image/place/aquatica.jpg"/>

		<Card h5="St. Paul's Cathedral" p="St. Paul's Cathedral is a Church of North India cathedral of Anglican background in Kolkata. Noted for its Gothic architecture and dedicated to Paul the Apostle. It is the seat of the Diocese of Kolkata. " image="image/place/stpaul.jpeg"/>

		<Card h5="Belur Math" p="Belur Math is the headquarters of the Ramakrishna Math and Ramakrishna Mission, founded by Swami Vivekananda, the chief disciple of Ramakrishna Paramahamsa. It is located in Belur. " image="image/place/belur.jpeg"/>

		<Card h5="Birla Mandir" p="Birla Mandir is a Hindu temple on Asutosh Chowdhury Avenue, Ballygunge. It is dedicated to Vishnu avatars such as Rama and Krishna. This temple is open in the morning from 5.30 A.M. to 11 A.M. and in the evening from 4 .30 P.M. to 9 P.M. " image="image/place/birla.jpeg"/>

		<Card h5="Science City" p="Science City is a science centre and science park in Kolkata. It is currently the largest science centre in the Indian subcontinent, containing a science museum, science park, and auditoriums. " image="image/place/science.jpeg"/>

		<Card h5="Princep Ghat" p="Princep Ghat is one of the oldest recreational spots of Kolkata. People visit it in the evenings on weekends to go boating on the river, stroll along the bank and purchase food from stalls there. It has illuminated and landscaped gardens and pathways, fountains and renovated ghats. " image="image/place/princep.jpeg"/>

		<Card h5="M.P. Birla Planetarium" p="The Birla Planetarium (officially M. P. Birla Planetarium) is situated at Chowringhee Road adjacent to the Victoria Memorial, St. Paul's Cathedral and the Maidan in Central Kolkata, it is the largest planetarium in Asia and the second largest planetarium in the world. " image="image/place/birla1.jpeg"/>

		<Card h5="Eco Park" p="Eco Park is an exception to the New Town of Kolkata, with its stunning green meadows, lush gardens, lakes and variety of trees. " image="image/place/eco.jpg"/>

		<Card h5="Dakshineswar Kali Temple" p="Dakshineswar Kali Temple or Dakshineswar Kalibari is a Hindu navaratna temple in Dakshineswar, Kolkata. Situated on the eastern bank of the Hooghly River, the presiding deity of the temple is Bhavatarini (Kali), a form of Mahadevi or Parashakti Adya Kali, otherwise known as Adishakti Kalika. " image="image/place/dakshineswar.jpeg"/>

		<Card h5="Nicco Park" p="Nicco Park is an amusement park located in Jheel Meel, Sector - IV of Bidhannagar. The park was created to attract tourists to the state by providing family-friendly recreation as well as educative entertainment. " image="image/place/nicco.jpeg"/>

		<Card h5="Indian Museum" p="The Indian Museum is a massive museum in Central Kolkata. It is the ninth oldest museum in the world and the oldest and largest museum in India and Asia, by size of collection. It has rare collections of antiques, armour and ornaments, fossils, skeletons, mummies and Mughal paintings. " image="image/place/museum.jpg"/>

		<Card h5="Jorasanko Thakur Bari" p="Jorasanko Thakur Bari in Jorasanko, North Kolkata, West Bengal, India, is the ancestral home of the Tagore family. It is the birthplace of poet Rabindranath Tagore and the host of the Rabindra Bharati University campus. " image="image/place/Thakurbari.jpg"/>

		<Card h5="Fort William" p="Fort William is a fort built in Kolkata on the eastern banks of the River Hooghly, the major distributary of Ganges. The magnificent structure is embellished with hundreds of arched windows that overlook lush green gardens. Meticulous stonework adorns the surface of the building. " image="image/place/fort.jpg"/>

		<Card h5="Marble Palace" p="The Marble palace near the Chorbagan in North Kolkata built in 1835 by Rajendra Mallick is famed for its art collection of masterpieces by Reuben and paintings by various renowned international artists such as Reynolds, Van Gogh and Rembrandt. " image="image/place/marble palace.jpg"/>

		<Card h5="Shobhabazar Rajbari" p="The Shobhabazar Rajbari is one of the grandest Bengali style houses ever built. It was build by the Royal family of Shobhabazar in Kolkata, and the grandeur is only palpable to the eye. " image="image/place/rajbari.jpg"/>

		<Card h5="Maidan" p="Also known as the Brigade Parade Ground, Maidan is the largest urban park in Kolkata. The humongous stretch of land includes the famous Eden Gardens, several football stadiums and the Race Course Kolkata. " image="image/place/maidan.jpg"/>
		</div>
	</div>
	
</div>
)
}