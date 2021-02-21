import React, {useState, useEffect} from 'react';

const Third = () => {
    const [characters, setCharacters] = useState([])
    const [searchString, setSearchString] = useState('')
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('https://hp-api.herokuapp.com/api/characters')
                const characters = await res.json()
                setCharacters(characters);
                setFilteredCharacters([...characters]);
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])

    useEffect(() => {
        let filteredCharacters = [...characters]
        if (searchString && characters.length > 0) {
            filteredCharacters = characters.filter((character) => 
            character.name.includes(searchString)
            );
        }
        setFilteredCharacters(filteredCharacters);
    }, [searchString, characters])

    return (
        <div className='container my-4'>
            <h1>Harry Potter Characters</h1>
            <form>
                <input type="text" name="searchBar" id="searchBar" placeholder="search for a character"
                value={searchString} onChange={e => setSearchString(e.target.value)} />
            </form>
            <ul id="characterList">
            {filteredCharacters.map((character, index) => (
                <li className="character" key={index}>
                    <h2>{character.name}</h2>
                    <p>House: {character.house}</p>
                    <img src={character.image} alt="HP character" />
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Third;
