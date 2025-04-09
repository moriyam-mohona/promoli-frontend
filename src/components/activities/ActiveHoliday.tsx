import ActivitiesSection from "../shared/ActivitiesSection";
import img1 from "@/assets/activities/active-holiday-one.png";
import img2 from "@/assets/activities/active-holiday-two.png";
import img3 from "@/assets/activities/active-holiday-three.png";
import img4 from "@/assets/activities/active-holiday-four.png";

const ActiveHoliday = () => {
  const locations = [
    {
      image: img1,
      title: "Panoramawanderung",
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
      title: "Radfahren mit Seeblick",
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
      title: "SUP auf Entdeckungstour",
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
      title: "Klettergarten Immenstaad",
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
        topTitle="Aktivurlaub in Bestform"
        title="Bewegung trifft Naturerlebnis"
        subTitle="Der Bodensee und das Allgäu sind ein wahres Paradies für sportlich Aktive – egal ob auf dem Wasser, dem Rad oder in den Bergen. Unsere Empfehlungen bringen dich garantiert ins Schwitzen – und zum Staunen."
        locations={locations}
      />
    </div>
  );
};

export default ActiveHoliday;
