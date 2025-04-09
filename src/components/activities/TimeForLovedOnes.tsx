import img1 from "@/assets/activities/loved-ones-one.png";
import img2 from "@/assets/activities/loved-ones-two.png";
import img3 from "@/assets/activities/loved-ones-three.png";
import img4 from "@/assets/activities/loved-ones-four.png";

import ActivitiesSection from "../shared/ActivitiesSection";

const TimeForLovedOnes = () => {
  const locations = [
    {
      image: img1,
      title: "Affenberg Salem",
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
      title: "Ravensburger Spieleland",
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
      title: "Skywalk Allgäu",
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
      title: "Badeparadies Schwarzwald",
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
        topTitle="Zeit für die Liebsten"
        title="Erlebnisse für Groß & Klein"
        subTitle="Ob spannende Ausflugsziele, kinderfreundliche Wanderwege oder Badevergnügen am See – der Bodensee und das Allgäu bieten perfekte Bedingungen für den Familienurlaub. Bei StaysVerwaltung zeigen wir dir die besten Aktivitäten für unvergessliche Momente mit der ganzen Familie."
        locations={locations}
      />
    </div>
  );
};

export default TimeForLovedOnes;
