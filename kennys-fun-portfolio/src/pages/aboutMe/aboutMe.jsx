import './AboutMe.css';

function AboutMe() {

    return(
        <div>
            <div id='aboutme-container' className='container colxxl-7 px-3 py-4'>

            <div className='row flex-lg-row-reverse align-items-center g-4 py-4'>

                <div className='col-lg-7'>

                    <h1 id='aboutMeTitle' className='display-4 fw-bold text-body-emphasis 1h-2 mb-3'>My Name is Kenny!!</h1>

                    <strong><p id='aboutMeSection' className='lead'>My name is Kenneth and i am a fullstack web developer.
                        My profienicenies are CSS, Javascript, HTML and a bit of React. Using my experience,
                        I could be a great asset to your company.</p></strong> 
                </div>
            
            </div>
            </div>
        </div>
    )
}

export default AboutMe