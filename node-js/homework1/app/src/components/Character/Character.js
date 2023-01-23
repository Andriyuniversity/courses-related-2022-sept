import React, {useEffect, useState} from 'react'

const Character = () => {
    const url = 'https://rickandmortyapi.com/api/character'
    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, []);

    return (
        <div>
            {
                users.map((value) =>
                    <div>
                        {value.id}
                    </div>)
            }
        </div>
    )
}

export default Character