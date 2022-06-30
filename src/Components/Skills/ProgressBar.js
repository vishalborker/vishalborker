import React from "react";

function ProgressBar({ percentage }) {
    return (
        <div className='progress'>
          <div className='progress-percentage' style={{ 'width': `${percentage}%` }}></div>
        </div>
    )
}

export default ProgressBar;