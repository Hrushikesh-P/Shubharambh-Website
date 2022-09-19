import "./mailList.css"
import emailjs from 'emailjs-com'; 

const MailList = () => {
  

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="name" placeholder="Your Email" />
        <button /*onClick={sendEmail("hrushikeshpawar9@gmail.com")}*/> Subscribe </button>
      </div>
    </div>
  )
}

// function sendEmail(e) {
//   e.preventDefault();
//   emailjs.sendForm('service_qbybvi1', 'template_213gdny', e.target, 'oAUxm-bWnEXmIeNlD')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
// }


export default MailList