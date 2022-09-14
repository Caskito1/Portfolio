import React from 'react';
import  '../styles/tooglebtn.scss';

const tooglebtn = ({}) => {
    return (
        <div>
           <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
        </div>
    );
}

export default tooglebtn;