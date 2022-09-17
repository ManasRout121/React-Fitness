import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import "./contact.css"

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Frugs itaque ducimus, ad amet praesentium suscipt sit, assumenda nihil official totam, animi culpa
      nobis nemo natus doloremque?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@gmail.com" target="_blank" rel="nofollow"><MdEmail /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="nofollow"><BsMessenger /></a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="nofollow"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact