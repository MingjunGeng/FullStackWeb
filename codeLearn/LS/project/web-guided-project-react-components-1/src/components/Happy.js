// Step 1: import React
import React from 'react';

// Step 2: function definition
// (can be either function declaration OR function expression)
function Happy(props) {
    //Step 3: return something...
    return (
        <div>
            { props.happy ? <div>Very happy!</div> : <div>It must be Monday, eh?</div> }
            <button onClick={() => props.setHappy(!props.happy)}>Change happy?</button>
        </div>
    )
}

// Step 4: export!
export default Happy;