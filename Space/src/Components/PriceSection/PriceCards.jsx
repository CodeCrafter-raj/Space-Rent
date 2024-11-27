import image8 from "../../assets/seminar2.jpg";
import image7 from "../../assets/image7.jpg";
import image3 from "../../assets/image3.jpg";
import seminar1 from "../../assets/seminar1.jpg";
import seminar2 from "../../assets/seminar2.jpg";
import cafeteria from "../../assets/Cafeteria.jpg";
import './PriceCards.css'
const PropertyCards = () => {
  const properties = [
    {
      id: 1,
      category: "Office Space",
      image: image3,
      area: "5000 Square cm",
      price: "50,000 / Month",
      location: "32 Mile Street, Church Road",
    },
    {
      id: 2,
      category: "Cafeteria",
      image: cafeteria,
      area: "6000 Square cm",
      price: "60,000 / Month",
      location: "45 King Avenue, Park Lane",
    },
    {
      id: 3,
      category: "Seminar Hall",
      image: seminar1,
      area: "4000 Square cm",
      price: "40,000 / Month",
      location: "12 Queen Street, Downtown",
    },
    {
      id: 4,
      category: "Conference Hall",
      image:seminar2 ,
      area: "7000 Square cm",
      price: "70,000 / Month",
      location: "98 Grand Boulevard, Uptown",
    },
  ];

  return (
    <div className="cards-container">
      {properties.map((property) => (
        <div key={property.id} className="card">
          <img src={property.image} alt="Office" />
          <p className="card-category">{property.category}</p>
          <h3>{property.area}</h3>
          <p><strong>Price:</strong> {property.price}</p>
          <p><strong>Location:</strong> {property.location}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyCards;