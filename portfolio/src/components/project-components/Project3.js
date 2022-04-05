import Header from '../Header';
import Footer from '../Footer';

const Project3 = () => {
    return (
        <div>
        <Header />
        <div className='body-container'>
            <h1 className='mt-4 mb-4 text-center'>Historiography</h1>
            <img className='project-hero' src='./images/historiography-hero.png' alt='the mentorMonkey landing page'/>
            <h3 className='mt-4'>Project Description</h3>
            <p><i>Historiography</i> is a note taker and organizer that allows historians to quickly review their notes and easily keep track of the books they have read. With academic historians as the target user, the app features a unique login that displays only the notes in one's collection. It also allows the user to highlight important notes and it automatically keeps track of one's sub-disciplinary fields based on each entry. <i>Historiography</i> features a minimalist UI to ease usability and provide a clean and organized feel.
            </p>
            <h3 className='mt-4'>My Role</h3>
            <p>
            This was my very first solo full-stack project. I built it from start to finish beginning with centering the user's needs. As someone trained in academic history, I felt that this was the kind of app that would have made my life so much easier back when I was studying for my PhD exams and writing my dissertation. I rechanneled my empathy for the user's pain points and built a simple app that can be further developed into a specialized product for scholars and university students. 
            </p>
            <h3 className='mt-4'>Technologies</h3>
            <ul className='tech-list'>
                <li>SQL</li>
                <li>Sequelize</li>
                <li>Express</li>
                <li>Handlebars</li>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>CSS/Bootstrap</li>
                <li>Bcrypt</li>
                <li>Express-session</li>
            </ul>
            <h3 className='mt-4'>Links</h3>
            <p>Heroku: <a href='https://historiography.herokuapp.com' target='_blank' rel='noreferrer' className='blue-link'>https://historiography.herokuapp.com</a></p>
            <p>Github Repo: <a href='https://github.com/stephtf/historiography' target='_blank' rel='noreferrer' className='blue-link'>https://github.com/stephtf/historiography</a></p>
           
            </div>
        <Footer />
    </div>
    )
}

export default Project3;