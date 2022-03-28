import Header from '../Header';
import Footer from '../Footer';

const Project1 = () => {
    return (
        <div>
            <Header />
            <div className='body-container'>
                <h1 className='mt-4 mb-4'>mentorMonkey</h1>
                <h2>Project Description</h2>
                <p>MentorMonkey is a web application that allows web developers to connect and help each other when they get stuck. It is designed to encourage mentorship between new developers and those with more experience in the field. However, even seasoned developers may need help from time to time! The user creates an account by selecting a username and password, and is able to log in for each session. Then, they are taken to their dashboard, which shows them who is online and available to chat. Users can choose to become mentors by clicking the button "Add me to the mentor list!". They are immediately taken to a chatroom where they will be notified when a mentee enters to ask them for help. The idea behind the app is to create a space where mentors and mentees can receive and give assistance on coding questions in real time, rather than having to work with a set schedule or wait for an appointment. It solves the problem that many of us developers often face - being alone when something suddenly stops working in our code!</p>
            </div>
           

            <Footer />
        </div>
    )
}

export default Project1;