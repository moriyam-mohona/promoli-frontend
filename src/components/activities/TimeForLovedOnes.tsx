import img1 from "@/assets/activities/not-lake-one.png";
import img2 from "@/assets/activities/not-lake-two.png";
import img3 from "@/assets/activities/not-lake-three.png";
import img4 from "@/assets/activities/not-lake-four.png";
import ActivitiesSection from "../shared/ActivitiesSection";

const TimeForLovedOnes = () => {
  const locations = [
    {
      image: img1,
      title: "Glasklares Wasser Genießen",
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
      title: "Charmante Orte Entdecken",
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
      title: "Seegang Mit Aussicht",
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
      title: "Abende Am See",
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
        topTitle="Nicht nur irgendein See"
        title="Der Bodensee – Natur, Kultur & Lebensgefühl"
        subTitle="A holiday without these highlights?  Unimaginable! Discover the most important sights of our beautiful  municipality Büsum. You will be amazed at what there is to learn about  them!"
        locations={locations}
      />
    </div>
  );
};

export default TimeForLovedOnes;
