import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const fullpageOptions = {
    callbacks: ['onLeave'],
};

const FullpageWrapper = fullpageProps => (<ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
        return (
            <div>
                <div className="section">
                    <p>Section 1 (welcome to fullpage.js)</p>
                    <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
                </div>
                <div className="section">
                    <p>Section 2</p>
                </div>
            </div>
        );
    }}
/>);

ReactDOM.render(<FullpageWrapper {...fullpageOptions} />, document.getElementById('react-root'));

export default FullpageWrapper;