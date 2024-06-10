import React from 'react';
import style from './Photobox.module.scss';
import velogo from '../../Assets/Navbar/VE logo_white 2.svg'

const clients = [
  { photo: "https://storage.googleapis.com/dev-veai/consultant.jpg", profession: 'Consultant', name: 'Priya' },
  { photo: "https://storage.googleapis.com/dev-veai/architect.jpg", profession: 'Architect', name: 'Alex' },
  { photo: "https://storage.googleapis.com/dev-veai/salon.png", profession: 'Saloon', name: 'Sam' },
  { photo: "https://storage.googleapis.com/dev-veai/photographer.jpg", profession: 'Photographer', name: 'Chris' },
  { photo: "https://storage.googleapis.com/dev-veai/fashionDesigner.jpg", profession: 'Fashion Designer', name: 'Chris' },
  { photo: "https://storage.googleapis.com/dev-veai/restaurateur.jpg", profession: 'Restaurant', name: 'Jordan' },
  { photo: "https://storage.googleapis.com/dev-veai/eventManagement.jpg", profession: 'Event Manager', name: 'Taylor' },
  { photo: "https://storage.googleapis.com/dev-veai/consultant.jpg", profession: 'Marketer', name: 'Casey' },
  { photo: "https://storage.googleapis.com/dev-veai/interiorDesigner.jpg", profession: 'Interior Designer', name: 'Jamie' },
  { photo: "https://storage.googleapis.com/dev-veai/businessCoach.jpg", profession: 'Business Coach', name: 'Morgan' },
  { photo: "https://storage.googleapis.com/dev-veai/consultant.jpg", profession: 'Consultant', name: 'Priya' },
  { photo: "https://storage.googleapis.com/dev-veai/architect.jpg", profession: 'Architect', name: 'Alex' },
  { photo: "https://storage.googleapis.com/dev-veai/salon.png", profession: 'Saloon', name: 'Sam' },
  { photo: "https://storage.googleapis.com/dev-veai/photographer.jpg", profession: 'Photographer', name: 'Chris' },
  { photo: "https://storage.googleapis.com/dev-veai/fashionDesigner.jpg", profession: 'Fashion Designer', name: 'Chris' },
  { photo: "https://storage.googleapis.com/dev-veai/restaurateur.jpg", profession: 'Restaurant', name: 'Jordan' },
  { photo: "https://storage.googleapis.com/dev-veai/eventManagement.jpg", profession: 'Event Manager', name: 'Taylor' },
  // { photo: "https://i0.wp.com/previsomedia.com/wp-content/uploads/2015/04/business-manager-2.jpg?w=795&ssl=1", profession: 'Consultant', name: 'Skyler' },
  // { photo: "https://i0.wp.com/previsomedia.com/wp-content/uploads/2015/04/business-manager-2.jpg?w=795&ssl=1", profession: 'Trainer', name: 'River' },
  // { photo: "https://i0.wp.com/previsomedia.com/wp-content/uploads/2015/04/business-manager-2.jpg?w=795&ssl=1", profession: 'Therapist', name: 'Blake' }
];

const Photosbox = () => {
  return (
    <div className={style.container}>
      <div className={style.photosection}>
        {clients.map((client, index) => (
          <div key={index} className={style.photocard}>
            <img src={client.photo} alt={`photo${index + 1}`} />
            <div className={style.hoverText}>
              <div>HOW</div> 
              <div>I DO WITH</div> 
              <div className={style.hoverimg}>
                <img src={velogo}/></div>
              </div>
            <div className={style.textsection}>
              <div className={style.profession}>{client.profession}</div>
              <div className={style.namebox}>{client.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photosbox;
