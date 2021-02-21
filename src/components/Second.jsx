import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';

const Second = () => {
    const [language, setLanguage] = useState([
        {id: uuid(), name: "Python", rank: 'First', application: 'Data Science, Machine Learning'},
        {id: uuid(), name: "JavaScript", rank: "Second", application: 'Web Development'},
        {id: uuid(), name: 'C++', rank: 'Third', application: 'programming application'},
        {id: uuid(), name: "Java", rank: 'Fourth', application: 'Full stack Development'},
    ])

    const addItem = () => {
        setLanguage([...language, {id: uuid(), name: "C#", rank: 'Fifth', application: "programming application"}])
    }

    const [color, setColor] = useState('dodgerBlue')

    useEffect(() => {
        document.body.style.background = color
        document.body.style.color = 'white'
    }, [color])

     const changeColor = () => {
        setColor('gold')
    }

    return (
        <div className="container my-4">
            <h1>We are Showing useEffect in here😄</h1>
            <button onClick={changeColor}>Change Color</button>
            <hr/>
            <h2 className='my-4'>Popular Programming Languages in 2021</h2>
            <ul>
            <table className="table bg-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>Application</th>
                    </tr>
                </thead>
                <tbody>
                {language.map ((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.rank}</td>
                            <td>{item.application}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <button onClick={addItem}>Click Here!</button>
            </ul>
        </div>
    )
}

export default Second;
