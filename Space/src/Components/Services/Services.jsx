import './Services.css'
import conf from '../../image2/conference.avif';
import privcabin from '../../image2/PrivateCabin.jpg';
import desk from '../../image2/desk.jpg';
import virtul from '../../image2/virtul.webp'
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();
  const properties = [
    {
      id: 1,
      heading:"Private Cabin",
      category: "Emphasizing Privacy and Productivity",
      image: privcabin,
      info: "Your private, fully-equipped office awaits. Enjoy the peace and quiet to focus on your work, with access to top-notch amenities and meeting spaces",
    //   price: "50,000 / Month",
    //   location: "32 Mile Street, Church Road",
    },
    {
      id: 2,
      heading:"Dedicated Desk",
      category: " Highlighting the Collaborative Environment",
      image: desk,
      info: "Your personal workspace, your terms. Have a dedicated desk in a collaborative office, with access to professional amenities and meeting rooms",
    //   price: "60,000 / Month",
    //   location: "45 King Avenue, Park Lane",
    },
    {
        id: 3,
        heading:"Virtual Office",
        category: "Highlighting Professional Image and Efficiency",
        image: virtul,
        info: "Maintain a professional image without the overhead. Our virtual office solutions provide a prestigious business address and efficient administrative services",
      //   price: "60,000 / Month",
      //   location: "45 King Avenue, Park Lane",
      },
    {
      id: 4,
      heading: "Conference Room",
      category:"Focusing on Flexibility and Customization",
      image: conf,
      info: "Your meeting space, your way. Our flexible conference rooms can be tailored to suit your specific needs, from intimate gatherings to large-scale presentations",
    //   price: "70,000 / Month",
    //   location: "98 Grand Boulevard, Uptown",
    }, 
  ];

  return (
    <div className="servicecards-container">
      {properties.map((property) => (
        <div key={property.id} className="servicecard">
          <img src={property.image} alt="Office" />
          <h3>{property.heading}</h3>
          <p className="servicecard-category">{property.category}</p>

          <p>{property.info}</p>
          {/* <p><strong>Price:</strong> {property.price}</p>
          <p><strong>Location:</strong> {property.location}</p> */}
           <button className="blinking-button" onClick={() => navigate('/book-now')}>Book Now</button> {/* Redirect on button click */}
        </div>
      ))}
    </div>
  );
};

export default Service;