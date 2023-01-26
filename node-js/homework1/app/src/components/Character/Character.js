import React, {useEffect, useState} from 'react'

const Character = () => {
    const url = 'https://rickandmortyapi.com/api/character'
    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setUsers(value['results']);
            })
    }, []);

    return (
        <div className='characters_base'>
            {
                users.slice(0,6).map((value) => 
                <div className='character_base' key={value['id']}>
                    {value['name']}
                    {value['episode']}
                </div>
                )
            }
        </div>
    )
            
}

export default Character