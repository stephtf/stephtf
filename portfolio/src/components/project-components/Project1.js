import Header from '../Header';
import Footer from '../Footer';

const Project1 = () => {
    return (
        <div>
            <Header />
            <div className='body-container'>
                <h1 className='mt-4 mb-4 text-center'>Fil-Am Food Blog</h1>
                <img className='project-hero' src='./images/foodblog.png' alt='homepage of Fil-Am Food Blog'/>
                <h3 className='mt-4'>Project Description</h3>
                <p><i>Fil-Am Food Blog</i> features Filipino American food and drink recipes, as well as personal stories related to the Philippines and eating delicious food! My fiancé, Gian, and I came up with the idea for the blog, because we wanted to share our passion for Filipino food, and we also wanted a place to preserve our family recipes. 
                </p>
                <p>What makes <i>Fil-Am Food Blog</i> unique is the user interface. We wanted the recipes to come first because who likes scrolling all the way down to find the recipe they are looking for? For future development, we also plan to build features such as adding ingredients into an online shopping cart, which would make cooking our recipes super convenient!  
                </p>
                <h3 className='mt-4'>My Role</h3>
                <p>
                My role included designing and building the site from start to finish. While Gian and I both create the content for the blog, I am responsible for all the tech stuff from drawing the wireframes in Figma to writing the front and backend code. 
                </p>
                <h3 className='mt-4'>Technologies</h3>
                <ul className='tech-list'>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>GraphQL</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>CSS</li>
                    <li>Figma</li>
                </ul>
                <h3 className='mt-4'>Links</h3>
                <p>Check out the website:
                <a href='https://www.filamfoodblog.com' target='_blank' rel='noreferrer' className='blue-link'> https://www.filamfoodblog.com</a>
                </p>
                <p>Github Repo: <a href='https://github.com/stephtf/the-fil-am-food-blog' target='_blank' rel='noreferrer' className='blue-link'>https://github.com/stephtf/the-fil-am-food-blog</a></p>
               
                </div>
            <Footer />
        </div>
    )
}

export default Project1;