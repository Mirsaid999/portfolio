const Contacts = () =>{
    return(
        <section id="contacts" className="contact-section">
            <h2 className="contacts-title span">Contact <span>Me!</span></h2>
            <form className="contact-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Mobile Number" />
                <input type="text" placeholder="Email Subject" />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contacts;