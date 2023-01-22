import React from 'react'
import Simpson from '../simpson-base/simpson-base'
import './Simpsons.css'

const Simpsons = () => {
    let name = 'Bart';
    let image = 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png';
    let text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Architecto beatae nam voluptatum. Nostrum saepe, ut.'
    let simpsonsArray = []


    for (let i = 0; i < 5; i++) {
        let simpson = `simpson${i}`
        console.log(simpson)
        simpsonsArray.push({
            simpson:
            <div className="simpson_base" key={`${i}`}>
                <Simpson name={name + `${i}`} image={image} about={text} />
            </div>
        })
    }

    return (
            <div className='simpsons_base'>
                {simpsonsArray.map((value) => value["simpson"])}
            </div>
    )
}
export default Simpsons