import React from 'react'
import Simpson from '../simpson-base'

const Simpsons = () => {
    let name = 'Bart';
    let image = 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png';
    let text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Architecto beatae nam voluptatum. Nostrum saepe, ut.'
    return (
        <div className="simpsons_base">
        <Simpson name={name} image={image} about={text} />
    </div>
)
}

export default Simpsons