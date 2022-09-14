import React from 'react';
import '../styles/skillsbar.scss'

const SkillsBarDesign = () => {
    return (
        <div className='skillsbar'>
         

            <div className="skill-box">
                <span className="title">Illustrator</span>
                <div className="skill-bar">
                    <span className="skill-per Il">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Photoshop</span>
                <div className="skill-bar">
                    <span className="skill-per Ps">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div> 
            <div className="skill-box">
                <span className="title">After Effects</span>
                <div className="skill-bar">
                    <span className="skill-per After">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Figma</span>
                <div className="skill-bar">
                    <span className="skill-per Figma">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SkillsBarDesign;