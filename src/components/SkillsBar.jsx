import React from 'react';
import '../styles/skillsbar.scss'

const SkillsBar = () => {
    return (
        <div className='skillsbar'>
           


            <div className="skill-box">
                <span className="title">Html</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Css</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">85%</span>
                    </span>
                </div>
            </div> 
            <div className="skill-box">
                <span className="title">Sass</span>
                <div className="skill-bar">
                    <span className="skill-per Scss">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per JS">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">React</span>
                <div className="skill-bar">
                    <span className="skill-per React">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
        </div>

    );
}

export default SkillsBar;