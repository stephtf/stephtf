import Header from '../Header';
import Footer from '../Footer';

const Project2 = () => {
    return (
        <div>
            <Header />
            <div className='body-container'>
                <h1 className='mt-4 mb-4'>Go Girl</h1>
                <img className='project-thumbnails' src='./images/mm-landing.png' alt='the mentorMonkey landing page'/>
                <h2 className='mt-4'>Project Description</h2>
                <p>MentorMonkey is a web application that allows web developers to connect and help each other when they get stuck. It is designed to encourage mentorship between new developers and those with more experience in the field. However, even seasoned developers may need help from time to time! The user creates an account by selecting a username and password, and is able to log in for each session. Then, they are taken to their dashboard, which shows them who is online and available to chat. Users can choose to become mentors by clicking the button 'Add me to the mentor list!'. They are immediately taken to a chatroom where they will be notified when a mentee enters to ask them for help. The idea behind the app is to create a space where mentors and mentees can receive and give assistance on coding questions in real time, rather than having to work with a set schedule or wait for an appointment. It solves the problem that many of us developers often face - being alone when something suddenly stops working in our code!
                </p>
                <h2 className='mt-4'>My Role</h2>
                <p>
                This was a team effort. I was the designated UX-UI person on this project. I worked in Figma to create wireframes, and I used CSS and bootstrap to create the UI. I used javascript to add features such as a carousel on the front page, and worked on the responsive design for mobile. Focusing mainly on the front-end, I  helped to write user routes and assisted my teammates with login/logout functionality.
                </p>
                <h2 className='mt-4'>Technologies</h2>
                <ul className='tech-list'>
                    <li>html</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>javascript</li>
                    <li>node.js</li>
                    <li>handlebars</li>
                    <li>mySql</li>
                    <li>sequelize</li>
                    <li>socket.io</li>
                    <li>figma</li>
                </ul>
                <h2 className='mt-4'>links</h2>
                <p>Heroku: <a href='https://secret-falls-29125.herokuapp.com/' target='_blank' rel='noreferrer'>https://secret-falls-29125.herokuapp.com</a></p>
                <p>Github: <a href='https://github.com/caitlinw29/mentor-monkey' target='_blank' rel='noreferrer'>https://github.com/caitlinw29/mentor-monkey</a></p>
               
                </div>
            <Footer />
        </div>
    )
}

export default Project2;