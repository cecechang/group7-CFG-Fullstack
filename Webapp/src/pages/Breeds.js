import React, { useRef } from "react";
import BreedCard from "../components/BreedCard.jsx";
import "../styles/Breeds.css";
import BackToTop from "@uiw/react-back-to-top";
import SearchBar from "../components/searchBar.jsx";
import Banner from "../components/dogFactAPI.jsx";
//note - tara had to use '../' to access directories 

const Breed = () => {
  const breedRefs = useRef({});

  //Array of breed info
  const breeds = [
    {
      name: "Corgi",
      imageUrl: "Dogs/corgi.png",
      imageAlt: "Corgi",
      quality: "Loyal  Playful  Intelligent",
      temper: "Friendly",
      knows:
        "•Walks required daily •High energy needs •Heavy fur shedders •Professional grooming required",
    },
    {
      name: "Shih tzu",
      imageUrl: "Dogs/shih.png",
      imageAlt: "Shih tzu",
      quality: "Affectionate  Alert  Friendly",
      temper: "Lively",
      knows:
        "•Frequent professional grooming required •Coat requires daily brushing •Suffers from human separation anxiety",
    },
    {
      name: "Golden Retriever",
      imageUrl: "Dogs/gRetriever.png",
      imageAlt: "Golden Retriever",
      quality: "Loyal  Friendly  Intelligent",
      temper: "Gentle",
      knows:
        "•Vigorous daily exercise required •Seasonal changes bring fourth shredding of their thick double coat",
    },
    {
      name: "Beagle",
      imageUrl: "Dogs/beagle.png",
      imageAlt: "Beagle",
      quality: "Curious  Energetic  Friendly",
      temper: "Cheerful",
      knows:
        "•High energy levels •Prone to boredom and destructive behaviour when not mentally and physically stimulated •Tendency to follow scents •Keep on a leash at all times",
    },
    {
      name: "Chihuahua",
      imageUrl: "Dogs/chihuaha.png",
      imageAlt: "Chihuahua",
      quality: "Alert  Brave  Loyal",
      temper: "Bold",
      knows:
        "•Delicate •Prone to injury •Wary of strangers and other animals •Early socialisation is essential",
    },
    {
      name: "Dachshund",
      imageUrl: "Dogs/dachshund.png",
      imageAlt: "Dachshund",
      quality: "Curious  Courageous Loyal",
      temper: "Independent",
      knows:
        "•Prone to back problems •Prevent jumping when possible •Ensure to support their back when lifting •Stubborn •Consistant and patient training necessary",
    },
    {
      name: "Doberman",
      imageUrl: "Dogs/dobberman.png",
      imageAlt: "Doberman",
      quality: "Fearless  Energetic  Intelligent",
      temper: "Alert",
      knows:
        "•High energy •Constant mental stimulation needed •Boredom will result in chewing and digging •Early socialisation essential to prevent aggression",
    },
    {
      name: "French Bulldog",
      imageUrl: "Dogs/frenchie.png",
      imageAlt: "French Bulldog",
      quality: "Affectionate  Playful  Adaptable",
      temper: "Easygoing",
      knows:
        "•Breathing issues (Brachycephalic syndrome) •Take special care in hotter seasons •Thrive on human companionship •Separation Anxiety •Need constant attention",
    },
    {
      name: "Greyhound",
      imageUrl: "Dogs/greyhound.png",
      imageAlt: "Greyhound",
      quality: "Gentle  Athletic  Loyal",
      temper: "Calm",
      knows:
        "•Low energy •Enjoys lounging around •Benefits from sprints and daily short exercise •Sensitive to extreme temperatures •Require clothing in winter •Do not leave outside in hot conditions unmonitored",
    },
    {
      name: "Huskey",
      imageUrl: "Dogs/Huskey.png",
      imageAlt: "Huskey",
      quality: "Plaful  Energetic  Independent",
      temper: "Friendly",
      knows:
        "•High energy •Vigorous daily exercise •Develop destructive behaviours when bored •Double thick coat sheds heavily  •Professional grooming regularly",
    },
    {
      name: "Jack Russell Terrier",
      imageUrl: "Dogs/jackRussel.png",
      imageAlt: "Jack Russell Terrier",
      quality: "Energetic  Intelligent  Fearless",
      temper: "Bold",
      knows:
        "•Highly energetic  •Require significant daily mental and physical exercise •Boredom leads to destructive behaviours •Stubborn •Firm training needed",
    },
    {
      name: "Miniature Schnauzer",
      imageUrl: "Dogs/minSchnauzer.png",
      imageAlt: "Miniature Schnauzer",
      quality: "Alert  Spirited  Affectionate",
      temper: "Energetic",
      knows:
        "•Distinctive double coat that requires regular grooming •Prone to coat matting •Regular brushing and trimming •Firm training needed ",
    },
    {
      name: "Samoyed",
      imageUrl: "Dogs/Samoyed.png",
      imageAlt: "Samoyed",
      quality: "Friendly  Gentle  Sociable",
      temper: "Affectionate",
      knows:
        "•Regular grooming needed due to thick double coat •Shed heavily •Coat matting and tangling common •Frequent brushing needed •Regular exercise •Mental stimulation like agility traning beneficial",
    },
    {
      name: "Sheltie",
      imageUrl: "Dogs/sheltie.png",
      imageAlt: "Sheltie",
      quality: "Intelligent  Loyal  Energetic",
      temper: "Responsive",
      knows:
        "•Active lifestyle needed •Thick double coat requires regular brushing to remove matting •Professional grooming required",
    },
    {
      name: "Shiba Inu",
      imageUrl: "Dogs/shiba.png",
      imageAlt: "Shiba Inu",
      quality: "Independent  Alert  Loyal",
      temper: "Bold",
      knows:
        "•Stubborn •Firm training required •Thick double coat requires constant maintainance •Heavy fur sheds",
    },
  ];

  //searchBar functionality
  const handleSearchSelect = (breedName) => {
    const breedRef = breedRefs.current[breedName];
    if (breedRef) {
      breedRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Banner */}
      <Banner />
      <SearchBar
        breeds={breeds.map((breed) => breed.name)}
        onSearchSelect={handleSearchSelect}
      />
      <div className="grid-container">
        {breeds.map((breed, index) => (
          <div
            key={index}
            className="breed-row"
            ref={(el) => (breedRefs.current[breed.name] = el)}
          >
            <BreedCard
              imageUrl={breed.imageUrl}
              imageAlt={breed.imageAlt}
              dogBreed={breed.name}
              quality={breed.quality}
              temper={breed.temper}
              knows={breed.knows}
            />
          </div>
        ))}
      </div>
      <BackToTop top={200} size={50} buttonText="Top">
        Top
      </BackToTop>{" "}
      {/*BACK TO TOP BTN*/}
    </div>
  );
};

export default Breed;
