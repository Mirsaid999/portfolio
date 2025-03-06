import Luxgaming from '../../assets/img/Screenshot_3.jpg';
import Loop from '../../assets/img/infinit.png';
import Topic from '../../assets/img/Topic.png';
import Mexant from '../../assets/img/mexant.png';
import Grad from '../../assets/img/grad.png';
import Project from './Project';
import { useState } from 'react';

const Works = () => {

  const [visibleProject, setVisibleProject] = useState(0);

  const works = [
    {
      title: 'Luxgaming',
      image: Luxgaming,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit vero culpa, nostrum voluptas temporibus nulla. Voluptas placeat veritatis laborum voluptatem adipisci, sunt aperiam at minus, molestias perferendis ab iure.',
      github: 'https://github.com/mirsaid9945/lux-gaming',
      chek: 'https://mirsaid9945.github.io/lux-gaming/',
    },
    {
      title: 'infinite-Loop',
      image: Loop,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit vero culpa, nostrum voluptas temporibus nulla. Voluptas placeat veritatis laborum voluptatem adipisci, sunt aperiam at minus, molestias perferendis ab iure.',
      github: 'https://github.com/mirsaid9945/Infinite-Loop',
      chek: 'https://mirsaid9945.github.io/Infinite-Loop/',
    },
    {
      title: 'Topic-Listing',
      image: Topic,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit vero culpa, nostrum voluptas temporibus nulla. Voluptas placeat veritatis laborum voluptatem adipisci, sunt aperiam at minus, molestias perferendis ab iure.',
      github: 'https://github.com/mirsaid9945/TopicListing',
      chek: 'https://mirsaid9945.github.io/TopicListing/',
    },
    {
      title: 'Mexant',
      image: Mexant,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit vero culpa, nostrum voluptas temporibus nulla. Voluptas placeat veritatis laborum voluptatem adipisci, sunt aperiam at minus, molestias perferendis ab iure.',
      github: 'https://github.com/mirsaid9945/Mexant',
      chek: 'https://mirsaid9945.github.io/Mexant/',
    },
    {
      title: 'Grad-School',
      image: Grad,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit vero culpa, nostrum voluptas temporibus nulla. Voluptas placeat veritatis laborum voluptatem adipisci, sunt aperiam at minus, molestias perferendis ab iure.',
      github: 'https://github.com/mirsaid9945/GradSchool',
      chek: 'https://mirsaid9945.github.io/GradSchool/',
    },
  ];

  const handleTitleClick = (index) => {
    setVisibleProject(index);
  };

  return (
    <section id="works" className="works">
      <h2 className="myworks-title">
        <span>My</span> Works
      </h2>
      <div className="projects-titles-container">
        {works.map((work, index) => (
          <h3
            key={index}
            onClick={() => handleTitleClick(index)}
            className={`project-title ${visibleProject === index ? 'active' : ''}`}
          >
            {work.title}
          </h3>
        ))}
      </div>
      {visibleProject !== null && (
        <div className="projects-container">
          <Project work={works[visibleProject]} />
        </div>
      )}
    </section>
  );
};

export default Works;
