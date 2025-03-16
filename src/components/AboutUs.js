import React from 'react';
import './AboutUs.css'; // Import CSS for styling

// Import founder photos (replace with actual image paths)
import founder1 from '../assets/a.jpg';
import founder2 from '../assets/n.jpg';
import founder3 from '../assets/me.jpg';
import founder4 from '../assets/j.jpg';

function AboutUs() {
  const founders = [
    {
      name: 'Amal Diyan',
      role: 'CEO & Co-Founder',
      bio: 'Amal is passionate about creating innovative solutions for campus navigation. He loves hiking and exploring new places.',
      photo: founder1,
    },
    {
      name: 'Muhammmed nishan',
      role: 'CTO & Co-Founder',
      bio: 'Nishan is a tech enthusiast with a knack for solving complex problems. In his free time, she enjoys coding and playing chess.',
      photo: founder2,
    },
    {
      name: 'Arshad ali',
      role: 'Head of Design',
      bio: 'Arshad is a creative designer who brings ideas to life. he loves painting and traveling to art galleries.',
      photo: founder3,
    },
    {
      name: 'Jaya Kumar',
      role: 'Head of Operations',
      bio: 'jayakumar ensures everything runs smoothly. He is a fitness enthusiast and enjoys outdoor sports.',
      photo: founder4,
    },
  ];

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        We are a team of passionate individuals dedicated to making campus navigation easier and more enjoyable for everyone.
      </p>
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img src={founder.photo} alt={founder.name} className="founder-photo" />
            <h2 className="founder-name">{founder.name}</h2>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-bio">{founder.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;