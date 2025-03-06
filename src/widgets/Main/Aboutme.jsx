const Aboutme = () =>{



    return(
        <>
        <section id='aboutme' className="aboutme">
            <div className="aboutme-content container">
                <h2 className="aboutme-title">
                    About <span>Me</span>
                </h2>
                <div className="general-aboutme">

                <div className='about-content-item'>

                    <p className='about-content-descr'>
                        I am a 14-year-old web developer with a passion for building websites and user interfaces. I have experience with HTML, CSS, JavaScript, and React, allowing me to create responsive and interactive web pages. My goal is to continuously learn and improve my skills, and I am excited about the endless possibilities in the world of web development.
                    </p>
                    <button className='aboutme-btn'>
                        <span>More</span>
                    </button>
                </div>
                <div className="bg">
                </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Aboutme;