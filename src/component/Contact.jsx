import React from 'react'
import './Contacts.css'

const Contact = () => {
  return (
    <section className="contact-section">
        <h2>Contact</h2>
            <div className="contact-grid">
                {/*Left column*/}
                <div className="contact-info">
                    <div className="contact-box">
                        <p>Email</p>
                        <a href="mailto: okekechukwudalu92@gmail.com">okekechukwudalu92</a>
                    </div>
                    <div className="contact-box">
                        <p>Instagram</p>
                        <a href="https://instagram.com/okekechukwudalu92">De Archer</a>
                    </div>
                    <div className="contact-box">
                        <p>YouTube</p>
                        <a href="https://youtube.com/okekechukwudalu92">okekechukwudalu92</a>
                    </div>
                    <div className="contact-box">
                        <p>WhatsApp</p>
                        <a href="htpps://wa.me/07026390428">okekechukwudalu92</a>
                    </div>
                </div>
                {/*Right Column */}
                <form action="
                " className="contact-form">
                    <input type="text" placeholder='Name' required/>
                    <input type="email" placeholder='Email' required/>
                    <textarea required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
    </section>
  )
}

export default Contact