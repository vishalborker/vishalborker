import React, { useEffect, useState } from 'react';

function Professional() {
  const profession = ["Software Engineer", "Web Designer", "Professional Coder"];

  const [whichProfession, setWhichProfession] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWhichProfession((curr) => {
        if(curr === 2) {
            return 0;
        }
        else {
            return curr + 1;
        }
    }), 4000);

    return () => {
        clearInterval(interval);
    }
  }, []);


  return (
    <>    
        {
            profession.map((prof, index) => {
                if(whichProfession === index) return <span key={index}>{prof}</span>
                return null
              }
            )
        }
    </>
  )
}

export default Professional