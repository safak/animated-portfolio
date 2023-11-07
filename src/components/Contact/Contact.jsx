import './contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='textContainer'>
        <h1>Let's work together</h1>
        <div className='item'>
          <h2>Mail:</h2>
          <span>stevecrabtree1965@gmail.com</span>
        </div>
        <div className='item'>
          <h2>Address:</h2>
          <span>Fort Myers, Florida</span>
        </div>
        <div className='item'>
          <h2>Phone:</h2>
          <span>1-815-519-7527</span>
        </div>
      </div>
      <div className='formContainer'>
        <form id='contactForm'>
          <input id='name'type='text' required placeholder='Name' autoComplete='off' />
          <input id='email' type='email' required placeholder='Email' autoComplete='off'/>
          <textarea id='textarea' rows={8} placeholder='Message'></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
 
export default Contact;
