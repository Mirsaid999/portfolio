const Skills = () =>{

    const myskills = [
'        https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg ',
'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg',
    ];

    return(
              
        <section id='skills' className="skills">
        <h2 className="skills-title ">
            <span>My</span> Skills
        </h2>

        <div className="skills__content container">

            <h2 className="skills-subtitle">
                <span>What</span> Can <span>I</span> Do?
            </h2>

            <div className="skills__item">

                <h3 className="skills-item__subtitle">
                Here’s what I’m good at.
                </h3>

                <div className="skills-img">
                {
                    myskills.map((src, i )=>(
                        <img key={i} src={src} width={40} height={40} alt="" />
                    ))
                }
                </div>

                <p className="skills-descr">
                    Frontend Development: I create modern, responsive and cross-browser interfaces using HTML, CSS, JavaScript and React. I am proficient in responsive layout approaches and pay attention to detail to achieve a flawless user experience.
                </p>

            </div>
        </div>
        </section>
    );
}

export default Skills;