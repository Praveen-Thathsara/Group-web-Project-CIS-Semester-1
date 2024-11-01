import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ImageDetail from './components/ImageDetail';
import Aboutus from './components/Aboutus';





const App = () => {
  const [images, setImages] = useState([
    { url: '/images/sigiriya.jpg', alt: 'Sigiriya', caption: "Sigiriya, a magnificent rock fortress in central Sri Lanka, is one of the country's most iconic landmarks. Also known as the 'Lion Rock,' it was constructed during the reign of King Kasyapa in the 5th century AD. This colossal rock, which rises nearly 200 meters above the surrounding plain, served as both a royal palace and a military stronghold. The entrance to the fortress was once through a giant lion-shaped gateway, of which only the paws remain today, giving the site its name.Sigiriya is famous for its stunning frescoes, known as the 'Sigiriya Maidens', which depict beautiful women in vibrant colors. The fortress also features advanced hydraulic systems, including terraced water gardens, pools, and fountains that continue to function even today. At the summit, the ruins of King Kasyapa's palace offer panoramic views of the surrounding countryside, making the climb worthwhile for visitors.Designated a UNESCO World Heritage site, Sigiriya is not only a masterpiece of ancient architecture but also an important part of Sri Lanka's cultural heritage. It represents a blend of natural beauty and human ingenuity, drawing tourists from around the world who are eager to experience this unique historical marvel." },
    { url: '/images/9arch.jpg', alt: 'Nine Arch', caption: "The glorious Nine arch bridge between Ella and Demodara station is one of the engineering marvels in the early 20th century of Sri Lanka. This bridge, which is almost 100 years old, has been built with blocks of stone and cement without any strengthening iron or concrete. This is also known as ‘Bridge in the sky’ . With a small 30 minute walk through the jungle, you will reach this piece of beautiful architecture which is hidden between lush green tea fields. It is allowed to walk on the bridge and it’s one of the things you must do in Sri Lanka." },
    { url: '/images/trtemple.jpg', alt: 'The Temple of Tooth Relic', caption: "The Temple of the Tooth Relic (Sri Dalada Maligawa) in Kandy, Sri Lanka, is a revered Buddhist site, enshrining a sacred relic of Lord Buddha’s tooth. Nestled beside the tranquil Kandy Lake, this temple serves as both a spiritual and cultural hub, drawing pilgrims and tourists alike. Its exquisite architecture, the vibrant Esala Perahera festival, and the peaceful ambience make it a must-visit. Designated a UNESCO World Heritage site in 1988, the temple reflects Sri Lanka’s profound devotion and history. Visitors can marvel at its sacred halls, ornate art, and captivating architectural splendour." },
    { url: '/images/sinharaja.jpg', alt: 'Sinharaja Rain Forest', caption: "Sinharaja Forest Reserve is a forest reserve and a biodiversity hotspot in Sri Lanka. It is of international significance and has been designated a Biosphere Reserve and World Heritage Site by UNESCO. According to International Union for Conservation of Nature (IUCN), Sinharaja is the country's last viable area of primary tropical rainforest. Over 60% of the trees are endemic, many of them considered rare. 50% of Sri Lankan's endemics species of animals (especially butterfly, amphibians, birds, snakes and fish species)It is home to 95% endemic birds." },
    { url: '/images/hikkaduw.jpg', alt: 'Hikkaduwa', caption: "Hikkaduwa, a coastal gem on Sri Lanka's southwest coast, is renowned for its vibrant marine life and pristine beaches. Famous for its coral reefs, it offers excellent snorkeling and diving opportunities, allowing visitors to explore underwater beauty. The beach is lined with palm trees and dotted with charming cafes and restaurants, making it a perfect spot for relaxation. Hikkaduwa is also home to a lively market and cultural attractions, including the ancient Hikkaduwa Temple. With its warm waters, golden sands, and friendly atmosphere, Hikkaduwa is a must-visit destination for anyone seeking both adventure and tranquility." },
    { url: '/images/ruwanwalisaaya.jpg', alt: 'Ruwanwelisaya', caption: "Ruwanwelisaya situated in Anuradhapura is one of the most revered and famous stupas in Sri Lanka which was constructed by King Dutugemunu in 140 B. C this structure is 338 ft high symbolizing the primordial culture and religion of the country. This makes the stupa to be very special for Buddhists since it’s believed to house some relics of the Buddha. With amazing elephant carving and location at a breathtaking place its one of the major places that tourists who visit sri Lankan ancient architecture." },
    { url: '/images/pasikuda.jpg', alt: 'Pasikuda Beach', caption: "Pasikuda Beach is a peaceful spot on Sri Lanka's eastern coast, known for its clean white sands and bright turquoise waters. The calm waves make it perfect for swimming, snorkeling, and kite surfing. Visitors can go boating and fishing, eat fresh seafood at coastal cafes, and visit surrounding cultural attractions. Pasikuda Beach, with its peaceful environment and numerous activities, offers the ideal combination of leisure and exploration.Additionally, Pasikuda Beach is known for its stunning sunrise views and vibrant marine life, which enhance its appeal as a must-visit destination.Pasikuda Beach provides a perfect blend of relaxation and exploration." },
    { url: '/images/yapahuwa.jpg', alt: 'Yapahuwa', caption: "Yapahuwa is a 13th-century rock fortress in Sri Lanka, built by King Bhuvanekabahu I to protect the sacred Tooth Relic of the Buddha. The site, located on a 100-meter-high rock, served briefly as the capital and features a beautifully carved stone staircase, a moat, and remnants of palace buildings. The Tooth Relic was later taken by South Indian invaders, leading to the abandonment of Yapahuwa. Today, it is a significant archaeological site, attracting tourists with its rich history, intricate carvings, and panoramic views of the surrounding landscape." },
    { url: '/images/lipton.jpg', alt: 'Lipton', caption: "Lipton's Seat is a renowned viewpoint located in the highlands of Sri Lanka, near the town of Haputale. Named after Sir Thomas Lipton, the Scottish tea planter, this spot offers breathtaking panoramic views of lush green tea plantations and the surrounding hills. It is said that Sir Lipton himself used to sit here and admire his expansive tea estates.Visitors can enjoy a scenic walk through the Dambatenne Tea Estate to reach the viewpoint, making it a popular destination for nature lovers and those interested in the history of Sri Lankas tea industry. The best time to visit is early in the morning to catch the sunrise and avoid the mist that often rolls in later in the day." },
    { url: '/images/yaala.jpg', alt: 'Yaala', caption: "Yala (යාල) National Park is the most visited and second largest national park in Sri Lanka, bordering the Indian Ocean. The park consists of five blocks, three of which are now open to the public. There are also two adjoining parks, Kumana National Park or 'Yala East' and Lunugamvehera National Park. The blocks have individual names, such as Palatupana (Block 1). It is situated in the southeastern region of the country, in the Southern Province and Uva Province. The park covers 979 square kilometres (378 sq mi) and is located about 300 kilometres (190 mi) from Colombo. Yala was designated as a wildlife sanctuary in 1900, along with Wilpattu, designated in 1938, as the first two designated national parks in Sri Lanka. The park is best known for its variety of wildlife and is important conservation of Sri Lankan elephants, Sri Lankan leopards and aquatic birds.There are six national parks and three wildlife sanctuaries in the vicinity of Yala. Among the largest is Lunugamvehera National Park. The park is situated in the dry semi-arid climatic region and rain is received mainly during the northeast monsoon. Yala hosts a variety of ecosystems ranging from moist monsoon forests to freshwater and marine wetlands. It is one of the 70 Important Bird Areas (IBAs) in Sri Lanka. Yala harbors 215 bird species including six endemic species of Sri Lanka. The number of mammals that has been recorded from the park is 44, and it has one of the highest leopard densities in the world.The area around Yala has hosted several ancient civilizations. Two important Buddhist pilgrim sites, Sithulpahuwa and Magul Vihara, are situated within the park. The 2004 Indian Ocean tsunami caused severe damage on the Yala National Park and 250 people died in its vicinity. The number of visitors has been on the rise since 2009, after the security situation in the park improved." },
    // Add more images as needed
  ]);

  return (
    <>
    
    <Router>
    <Navbar />
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home images={images} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/image/:id" element={<ImageDetail images={images} />} /> {/* Pass images prop */}

        </Routes>
      </div>
    </Router>
    <Footer />
    </>
  );
};

export default App;
