import Header from '../Header';
import Footer from '../Footer';

const Project2 = () => {
    return (
        <div>
            <Header />
            <div className='body-container'>
                <h1 className='mt-4 mb-4 text-center'>MentorMonkey</h1>
                <img className='project-hero' src='./images/mm-hero.png' alt='the mentorMonkey landing page'/>
                <h3 className='mt-4'>Project Description</h3>
                <p><i>MentorMonkey</i> is an application that allows web developers to connect and help each other when they get stuck. It is designed to encourage mentorship between new developers and those with more experience in the field. After logging in, users are taken to a unique dashboard, which shows them who is online and available to chat. <i>MentorMonkey</i> creates a space where mentors and mentees can receive and give assistance on coding questions in real time rather than having to work with a set schedule or wait for an appointment. It solves the problem that many developers often face - being alone when something suddenly stops working in our code!
                </p>
                <h3 className='mt-4'>My Role</h3>
                <p>
                I was the designated UX-UI person on this project. I worked in Figma to create wireframes, and I used CSS and Bootstrap to bring the design to life. I also worked on features such as the carousel on the landing page, and I worked on creating a responsive design for mobile. 
                </p>
                <h3 className='mt-4'>Technologies</h3>
                <ul className='tech-list'>
                    <li>HTML</li>
                    <li>CSS/Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Handlebars</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>Socket.io</li>
                    <li>Figma</li>
                </ul>
                <h3 className='mt-4'>Links</h3>
                <p>Heroku: <a href='https://secret-falls-29125.herokuapp.com/' target='_blank' rel='noreferrer' className='blue-link'>https://secret-falls-29125.herokuapp.com</a></p>
                <p>Github Repo: <a href='https://github.com/caitlinw29/mentor-monkey' target='_blank' rel='noreferrer' className='blue-link'>https://github.com/caitlinw29/mentor-monkey</a></p>
               
                </div>
            <Footer />
        </div>
    )
}

export default Project2;