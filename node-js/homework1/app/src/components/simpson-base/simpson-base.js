import React from 'react'
import './simpson-base.css'

function Simpson({name, image, about}) {
    return (
        <div className="simpson">
            <div className={"simpson_base"}>
                <h1>{name}</h1>
                <img src={image} alt='' />
                <span className={'simpson_base-about'}>{about}</span>
            </div>
        </div>

    );
  }

export default Simpson


//   import React from 'react';
// import './ImageBlock.css'

// export const ImageBlock = ({url, bool}) => {
//     console.log(bool ? 'true' : 'false')
//     return (
//         <div>
//             <img className="image" src={url} alt=""/>
//         </div>
//     );
// };