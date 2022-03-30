import Header from '../Header';
import Footer from '../Footer';

const Project4 = () => {
    return (
        <div>
            <Header />
            <div className='body-container'>
                <h1 className='mt-4 mb-4 text-center'>Ultimate Urban Dictionary</h1>
                <img className='project-hero' src='./images/urban-hero.png' alt='the mentorMonkey landing page'/>
                <h3 className='mt-4'>Project Description</h3>
                <p><i>Ultimate Urban Dictionary</i> is a fun application that allows users to search for trendy and/or slang words to find their definitions as well as a corresponding gif. Our target user is anyone who wants to learn some hip new lingo! Using Giphy and Urban Dictionary API, this project adds a whole new dimension to the idea of an online dictionary. 
                </p>
                <h3 className='mt-4'>My Role</h3>
                <p>
                This was truly a collaborative effort from start to finish. I helped to define the project and its aesthetic as well as its functionality from the very beginning. I was also heavily involved in writing the front-end logic during the development phase. I also worked on the UI using CSS and Bootstrap.
                </p>
                <h3 className='mt-4'>Technologies</h3>
                <ul className='tech-list'>
                    <li>HTML</li>
                    <li>CSS/Bootstrap</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Urban Dictionary API</li>
                    <li>Giphy API</li>
                    <li>Figma</li>
                </ul>
                <h3 className='mt-4'>links</h3>
                <p>Github Pages: <a href='https://rwashi690.github.io/Urban_Dictionary_and_Memes' target='_blank' rel='noreferrer' className='blue-link'>https://rwashi690.github.io/Urban_Dictionary_and_Memes</a></p>
                <p>Github Repo: <a href='https://github.com/rwashi690/Urban_Dictionary_and_Memes' target='_blank' rel='noreferrer' className='blue-link'>https://github.com/rwashi690/Urban_Dictionary_and_Memes</a></p>
                </div>
            <Footer />
        </div>
    )
}

export default Project4;