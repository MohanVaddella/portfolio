export default function ContactMe() {
    return (
        <section className="contact--section" id="Contact">
            <div>
                <p className="section--title contact--section--title">Get In Touch</p>
                <p className="text-lg">If you'd like to get in touch with me, feel free to reach out using the contact information below or by filling out the contact form.</p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="myemail" className="contact--label">
                        <span className="text-md">Email</span>
                        <span className="text-sm">mohanvaddella@gmail.com</span>
                    </label>
                    <label htmlFor="myphone" className="contact--label">
                    <span className="text-md">Phone</span>
                        <span className="text-sm">+91 9704896126</span>
                    </label>
                    <label htmlFor="name" className="contact--label">
                        <span className="text-md">Name</span>
                        <input 
                        type="text" 
                        className="contact--input text-md"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input 
                        type="email" 
                        className="contact--input text-md"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        />
                    </label>
                    <label htmlFor="message" className="contact--label message--label">
                        <span className="text-md">Message</span>
                        <textarea  
                        className="contact--input text-md message--textarea"
                        id="message"
                        rows="3"
                        placeholder="Your Message"
                        required
                        />
                    </label>
                    </div>
                    <div className="contact--form--btn-container">
                        <button className="btn btn-primary contact--form--btn">Send Message</button>
                    </div>
                
            </form>
        </section>
    )
}