import ActivitiesSection from "../shared/ActivitiesSection";
import img1 from "@/assets/activities/journey-of-discovery-one.png";
import img2 from "@/assets/activities/journey-of-discovery-two.png";
import img3 from "@/assets/activities/journey-of-discovery-three.png";
import img4 from "@/assets/activities/journey-of-discovery-four.png";
const JourneyOfDiscovery = () => {
  const locations = [
    {
      image: img1,
      title: "Schloss Neuschwanstein ",
      description:
        "Enjoy the crystal clear water of Lake Constance. The perfect spot to relax and unwind.",
      details: [
        "518 km² Water Surface",
        "Perfect for recreational activities",
        "Many beaches and scenic areas",
      ],
    },
    {
      image: img2,
      title: "Insel Reichenau",
      description:
        "Explore charming towns and villages surrounding Lake Constance, full of culture and history.",
      details: [
        "Rich in history and architecture",
        "Quaint cafes and local markets",
        "Peaceful atmosphere",
      ],
    },
    {
      image: img3,
      title: "Pfänderbahn fahren",
      description:
        "Experience the magnificent views from the water, ideal for boat tours and water activities.",
      details: [
        "Perfect for sailing and boat trips",
        "Fantastic panoramic views",
        "Access to various islands",
      ],
    },
    {
      image: img4,
      title: "Altstadtflair in Meersburg",
      description:
        "Enjoy a calm and peaceful evening by the lake, perfect for a sunset stroll or a relaxing moment.",
      details: [
        "Beautiful sunsets",
        "Peaceful ambiance",
        "Perfect for evening walks",
      ],
    },
  ];

  return (
    <div>
      <ActivitiesSection
        topTitle="Auf Entdeckungsreise gehen"
        title="Die Region steckt voller Highlights"
        subTitle="Erlebe Burgen, Schlösser, Inseln und charmante Altstädte – viele Highlights erreichst du in nur wenigen Minuten. Mit unseren Tipps wird jeder Ausflug zum Erlebnis."
        locations={locations}
      />
    </div>
  );
};

export default JourneyOfDiscovery;
