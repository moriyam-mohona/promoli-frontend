import ActivitiesSection from "../shared/ActivitiesSection";
import img1 from "@/assets/activities/excursions-one.png";
import img2 from "@/assets/activities/excursions-two.png";
import img3 from "@/assets/activities/excursions-three.png";
import img4 from "@/assets/activities/excursions-four.png";

const Excursions = () => {
  const locations = [
    {
      image: img1,
      title: "Strandbad Langenargen",
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
      title: "Blütenpracht auf Mainau",
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
      title: "Skifahren mit Aussicht",
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
      title: "Wellness in der Therme",
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
        topTitle="Excursions"
        title="Sommerträume & Wintermärchen"
        subTitle="Im Sommer lockt das kühle Nass, im Winter das weiße Abenteuer. Ganz gleich, wann du anreist – rund um Bodensee und Allgäu wartet die passende Aktivität auf dich."
        locations={locations}
      />
    </div>
  );
};

export default Excursions;
