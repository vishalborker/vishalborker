import React, {useState} from 'react';


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const reqBody = {
            name, email, project, message
        }
        console.log(reqBody);
    }
  return (
    <article className='contact-form'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" 
                placeholder="Name" 
                required 
                onChange={(e) => setName(e.target.value)} 
                value={name}
            />
            <input type="email" 
                placeholder="Email" 
                required 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input type="text" 
                placeholder="Project" 
                required 
                onChange={(e) => setProject(e.target.value)}
                value={project}
            />
            <textarea placeholder="Message" 
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            >    
            </textarea>
            <button type="submit">Submit</button>
        </form>
    </article>
  )
}

export default ContactForm