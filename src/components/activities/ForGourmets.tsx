import ActivitiesSection from "../shared/ActivitiesSection";
import img1 from "@/assets/activities/gourmets-one.png";
import img2 from "@/assets/activities/gourmets-two.png";
import img3 from "@/assets/activities/gourmets-three.png";
import img4 from "@/assets/activities/gourmets-four.png";

const ForGourmets = () => {
  const locations = [
    {
      image: img1,
      title: "Allgäuer Käseroute",
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
      title: "Wein mit Seeblick",
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
      title: "Open-Air-Kunst erleben",
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
      title: "Markttag in Lindau",
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
        topTitle="Für Feinschmecker & Kulturfans"
        title="Schmecken. Staunen. Genießen."
        subTitle="Echte Allgäuer Käsekultur, Bodenseewein mit Aussicht und kulturelle Highlights wie die Bregenzer Festspiele – diese Region schmeckt und inspiriert. Wir zeigen dir, wo dein Urlaub zum Erlebnis für alle Sinne wird."
        locations={locations}
      />
    </div>
  );
};

export default ForGourmets;
