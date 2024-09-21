import './Contact.css';

function Contact() {

    return (
        <div>
            <main id='contactForm' className='form-sigin w-45 m-auto'>

            <h1 id='contactMe' className='form-control mb-4 fw-normal'>Contact Me</h1>

            <form>
                <div className='form-floating'>

                    <input type="text" className='form-control' placeholder='Name' />

                    <label for="floatingInput">Name</label>
                </div>

                <div className='form-floating'>

                    <input type="email" className='form-control' placeholder='name@email.com' />

                    <label for="floatingEmail">Email Address</label>
                </div>
                
                <button id='Submit-Button' className='btn btn-primary w-100 align-items-center' type='submit'>Submit</button>
            </form>
            </main>
        </div>
    )
}

export default Contact