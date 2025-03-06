

const Project = ({work}) =>{
    return(
        <div id="myworks" className="project">
            <div className="project-content container">
                <div className="project-item">
                    <h3 className="project-item-title">{work.title}</h3>
                    <img src={work.image} alt="" width={800} height={450} />
                    <p className="project-item-descr">{work.descr}</p>
                    <div className="links">
                    <a href={work.github} className="project-item-btn">Открыть GitHub</a>
                    <a href={work.chek} className="project-item-btn">Просмотр</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;