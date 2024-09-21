import './Resume.css';

function Resume() {

    return(
        <div id='resumeContainer'>

            <div id='resume' className='container'>

                <div className='header'>

                    <h1>Kenneth Hasson</h1>
                    <p>PH: 781-600-4120 Email: kennethhass1014@icloud.com</p>

                </div>
                <hr />

                <div className='section'>

                    <h2>Break-Down</h2>
                    <p>I am a full stack web developer focused on building fully interactive, seemless 
                        applications. With a strong knowledge of modern technologies like JavaScript, node.js 
                        and react I can build a wide range of desired wepbages and applicatiions.</p>
                </div>
                    <div className='section'>

                        <h1>Education</h1>
                        <p>Northeast Metro Regiional Voc Highschool<span>2019-2022</span><br />
                        Major~ Drafting and Design</p>
                        
                        <p>University of Southern New Hampshire<span>2024-2024</span><br />
                        Full-Stack Web Development Bootcaamp</p>
                    </div>
            </div>
        </div>
    )
}

export default Resume