import Header from '../Header';
import Footer from '../Footer';

const Project1 = () => {
    return (
        <div>
            <Header />
            <div className='body-container'>
                <h1 className='mt-4 mb-4 text-center'>Go Girl</h1>
                <img className='project-hero' src='./images/gogirl-hero.png' alt='the Go Girl dashboard'/>
                <h3 className='mt-4'>Project Description</h3>
                <p>Go Girl is a social media web application designed to be developed into a progressive web app (PWA) for mobile devices. The app provides a safe online space for solo female travelers, allowing them to connect with friends and family without jeopardizing their safety. Go Girl features a secure dashboard where users can post images, messages, and updates about their travels. The dashboard includes a link to WAYZE to ensure easy access to GPS navigation. For future development, an emergency button will allow users to quickly comunicate with local authorities and emergency contacts. We designed Go Girl mobile-first, as our users will primarily be 'on the go.' 
                </p>
                <p>What makes Go Girl unique is its focus on social media. Many other apps on the market today with the same target user focus on providing emergency services. While this is important, it ignores the social media component of the problem. There have been many incidences of female travelers being tracked by predators because of their social media posts, which makes providing secure apps even more important. We used Google OAuth 2.0 for our secure login, along with AWS-S3 to store our images and MongoDB for our database.  
                </p>
                <h3 className='mt-4'>My Role</h3>
                <p>
                My role included creating the backend and writing the front-end logic in React to connect the two. I created our database in MongoDB and wrote the Express API routes. I also designed the UI for the user dashboard and wrote the fetch requests to display our images and text data to the page. To do this, I worked closely with my teammates, especially on the AWS-S3 components in order to integrate this new technology into our app. 
                </p>
                <h3 className='mt-4'>Technologies</h3>
                <ul className='tech-list'>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Google OAuth 2.0</li>
                    <li>AWS-S3</li>
                    <li>Passport</li>
                    <li>Multer</li>
                    <li>CSS/Bootstrap</li>
                </ul>
                <h3 className='mt-4'>links</h3>
                <p>Github Repo: <a href='https://github.com/rwood022/goGirl.git' target='_blank' rel='noreferrer' className='blue-link'>https://github.com/rwood022/goGirl.git</a></p>
               
                </div>
            <Footer />
        </div>
    )
}

export default Project1;