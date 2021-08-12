import React from 'react'

export default function Mainscreen() {
  return (
    <div>
      <section className="main">
        <div className="main-text">
          <h1>Nathan Wigen</h1>
          <br/>
          <p>Welcome to my Page!</p>
          <br />
          <br />
          <p>I am a Front End Developer based in Washington State who enjoys the fast pace of working as a developer. Seeking an entry level position to utilize my computer, and service skills. I am self-motivated, quick to learn and a hard-working individual who is energetic and committed to an excellent customer service experience. I have been proven to be flexible, prompt, resourceful, organized, and detail-oriented in the workplace.</p>
          <br />
          <a href="#footer">Contact me ></a>
        </div>

        <div className="hero-image">
          <div className="cube" id="react"></div>
          <div className="cube" id="js"></div>
          <div className="cube" id="html"></div>
          <div className="cube" id="css"></div>
        </div>
      </section>

      <section className="sub-section">
        <div className="square">
          <h2>What's The Weather Today</h2>
          <p>Weather-Today uses Oceandrivers API to provide weather data based on the location the user entered.</p>
          <br />
          <a href="https://github.com/NathanWigen/Weather-Today">Check it out ></a>
        </div>
        <div className="square">
          <h2>Review Your Game</h2>
          <p>Review Your Game uses Airtable API to store the review of the video game that the user played and the front end makes a API call to grab the review information and render it back to the user.</p>
          <br />
          <a href="https://github.com/NathanWigen/Review-the-Game">Check it out ></a>
        </div>
        <div className="square">
          <h2>ROOT</h2>
          <p>Root is an application designed to provide sustainable transportation methods to users. This first iteration includes information on the different types of transportation where users can view, add, delete, or edit options. The application allows the user to create a profile and log in and has mobile breakpoints throughout the site. This project was built by myself and a team of junior developers in collaboration with a UX/UI team who provided the overall concept and design of the website.</p>
          <br />
          <a href="https://github.com/allicue/root">Check it out ></a>
        </div>
        <div className="square">
          <h2>Game-Thoughts</h2>
          <p>Game-Thoughts is an application designed to allow users to review video games they played and start conversations thru a comment section. The first iteration allows users to view, add, edit, and delete blogs post that they made via conditional rendering if the user is logged in and their user id matches to the blog post.</p>
          <br />
          <a href="https://github.com/NathanWigen/Game-Thoughts">Check it out ></a>
        </div>
      </section>
    </div>
  )
}
