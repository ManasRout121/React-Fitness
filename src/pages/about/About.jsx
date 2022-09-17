import "./about.css";
import Header from "../../components/Header";
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

const About = () => {
  return (
    <>
    <Header title ="About Us" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio dicta rem iste facilis et recusandae aliquam culpa deleniti autem nesciunt?
    </Header>
    <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, alias eum? Beatae quis impedit sit deserunt laborum repellat deleniti maiores repudiandae, doloribus obcaecati reiciendis dolore, maxime ut aperiam quas vel!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia libero iusto iure quis expedita repellendus aperiam? Perferendis, cumque tenetur tempora veniam laboriosam voluptate ullam nostrum.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam quo voluptatibus corrupti placeat aliquid.</p>
          </div>
        </div>
    </section>

    <section className="about__vision">
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, alias eum? Beatae quis impedit sit deserunt laborum repellat deleniti maiores repudiandae, doloribus obcaecati reiciendis dolore, maxime ut aperiam quas vel!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia libero iusto iure quis expedita repellendus aperiam? Perferendis, cumque tenetur tempora veniam laboriosam voluptate ullam nostrum.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Story Image" />
          </div>
        </div>
    </section>

    <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, alias eum? Beatae quis impedit sit deserunt laborum repellat deleniti maiores repudiandae, doloribus obcaecati reiciendis dolore, maxime ut aperiam quas vel!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia libero iusto iure quis expedita repellendus aperiam? Perferendis, cumque tenetur tempora veniam laboriosam voluptate ullam nostrum.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam quo voluptatibus corrupti placeat aliquid.</p>
          </div>
        </div>
    </section>
    </>
  )
}

export default About