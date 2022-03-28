import Header from './Header';
import Footer from './Footer';

function MyStory() {
    return (
      <div>
        <Header />
        <div className='body-container'>
          <h1 className='mt-4'>my story</h1>
          <p>
            I wanted to learn how to code because I love the idea that technology can solve social problems. I also wanted to have the skills to be able to create any app or website imaginable! I came to this careerpath in a non-traditional way, as I studied the humanities in college. I completed a PhD in history and actually thought I was going to be a history professor! My dissertation explored the impacts of US militarism on women in the Philippines. If you're interested, feel free to check out <a href='https://muse.jhu.edu/article/679424' class='link-styles'>my article</a> on the topic. 
          </p>
          <p>
              While I really enjoyed academic research, I also felt like something was missing for me. Much of the work I was doing felt abstract, and it would take many years to see results (historians often spend decades working on a project before it gets published). This is what eventually led me to pursue UX design and web development.
          </p>
          <p> 
              I don’t see myself as starting over in my career, but rather building on my previous work with a more technical skillset. In my academic projects, I wanted to make a positive social impact through research. 
              I hope to do the same through creating apps and websites that focus on user needs and problems. 
          </p>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default MyStory;