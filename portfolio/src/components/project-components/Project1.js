const Project1 = () => {

  return (
    <div>
        <h1 className='mt-4 mb-4 text-center'>Fil-Am Foodie</h1>
        <img className='project-hero' src='./images/foodblog.png' alt='homepage of Fil-Am Foodie' />
        <h3 className='mt-4'>Project Description</h3>
        <p><i>Fil-Am Foodie</i> features Filipino American food and drink recipes, as well as personal stories of our travels to the Philippines and eating delicious food! My fiancé, Gian, and I came up with the idea for the blog, because we wanted to share our passion for Filipino food, and we also wanted a place to preserve our family recipes. It was also another chance for me to develop my coding skills, as I wanted to build another MERN stack app!
        </p>
        <p>What makes <i>Fil-Am Foodie</i> unique is the user interface. Have you ever searched for a recipe online only to land on a page where you have to scroll all the way to the bottom to actually see the recipe? We wanted to design our site so that the recipes come first, and the stories and detailed instructions come second. Users are also able to write comments on each recipe, and interact with other users. For future development, we also plan to build features such as the ability to add ingredients into an online shopping cart, which would make cooking super convenient!
        </p>
        <h3 className='mt-4'>My Role</h3>
        <p>
          My role included designing and building the site from start to finish. While Gian and I both create the content for the blog, I am responsible for all the tech stuff from drawing the wireframes in Figma to writing the front and backend code.
        </p>
        <h3 className='mt-4'>Technologies</h3>
        <ul className='tech-list'>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express API</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS</li>
          <li>Figma</li>
        </ul>
        <h3 className='mt-4'>Links</h3>
        <p>Check out the website:
          <a href='https://www.filamfoodie.com' target='_blank' rel='noreferrer' className='blue-link'> https://www.filamfoodie.com</a>
        </p>
        <p>Github Repo: <a href='https://github.com/stephtf/fil-amfoodie' target='_blank' rel='noreferrer' className='blue-link'>https://github.com/stephtf/fil-amfoodie</a></p>
    </div>
  )
}

export default Project1;