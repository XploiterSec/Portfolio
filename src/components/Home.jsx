import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
const SKILLS = [
  { name: 'Networking', level: '85%', color: 'bg-info' },
  { name: 'Ethical Hacking', level: '80%', color: 'bg-danger' },
  { name: 'Python', level: '75%', color: 'bg-success' },
  { name: 'MERN Stack (Mongo DB, Express, React, Node)', level: '70%', color: 'bg-primary' },
  { name: 'Data Structures & Algorithms', level: '40%', color: 'bg-warning' },
];

const PROJECTS = [
  { name: 'XLogger', desc: 'Simple KeyLogger', url: 'https://github.com' },
  { name: 'Net-Knife', desc: 'Advanced Network Security Toolkit', url: 'https://github.com' },
  { name: 'SentinelX', desc: 'Threat Dashboard', url: 'https://github.com' },
];

const CONTACT = [
    {name:"E-mail", info:"vishnupanneerselvam6@gmail.com"},
    {name:"Linked-In", info:"https://www.linkedin.com/in/vishnu-panneerselvam/"},
    {name:"Mobile", info:"+91-7904189867"},
]

const Home = () => {
  return (
    <div className='bg-container bg-dark text-light min-vh-100'>
     
      <nav className="navbar navbar-dark bg-black navbar-expand-lg border-bottom border-secondary">
        <div className="container">
          <a className="navbar-brand neon-text fw-bold" href="#">Vishnu P</a>
        </div>
      </nav>

     
      <section className="hero text-center d-flex align-items-center py-5 my-5">
        <div className="container">
          <h1 className="display-4 neon-text fw-bold mb-3">Junior Software Developer</h1>
          <p className="lead text-secondary">React JS | JAVA | Linux and Networking</p>
          
          <a href="#skills" className="btn btn-outline-info mt-3 px-4 py-2 sec-btn">Skills</a>

          <a href="#projects" className="btn btn-outline-info mt-3 px-4 py-2 sec-btn">View Projects</a>

          <a href="#contact" className="btn btn-outline-info mt-3 px-4 py-2 sec-btn">Contact</a>
        </div>
      </section>

     
      <section className="container py-5" id="skills">
        <h2 className="text-center neon-text mb-4">Skills</h2>
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          {SKILLS.map((skill, index) => (
            <div className="mb-4" key={index}>
              <div className="d-flex justify-content-between text-secondary mb-1">
                <label className="text-light fw-semibold">{skill.name}</label>
                <span>{skill.level}</span>
              </div>
              <div className="progress bg-black border border-secondary" style={{ height: '1.25rem' }}>
                <div 
                  className={`progress-bar ${skill.color} progress-bar-striped progress-bar-animated`} 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="container py-5" id="projects">
        <h2 className="text-center neon-text mb-5">Projects</h2>
        <div className="row justify-content-center">
          {PROJECTS.map((project, index) => (
            <div className="col-10 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card bg-black border-secondary h-100 project-card shadow">
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <h5 className="card-title neon-text mb-3">{project.name}</h5>
                    <p className="card-text text-secondary small">{project.desc}</p>
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm btn-outline-info mt-3 align-self-start"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


       <section className="container py-5" id="contact">
            <h2 className="text-center neon-text mb-5">Contact</h2>
            <div className="row">
            {CONTACT.map((contact, index) => (
            <div className="col-10 col-md-6 col-lg-4" key={index}>
              
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text text-secondary small">{contact.info}</p>
                  </div>
               
          ))}
        </div>
       </section>
    </div>
  );
};

export default Home;
