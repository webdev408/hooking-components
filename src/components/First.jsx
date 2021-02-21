import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

const First = () => {
    const [state, setState] = useState({ 
        language: 'React',
        years: 0 
        })

        const changeLanguage = () => {
            setState({...state, language: 'React ecosystem'})
        }

        function totalYear() {
            setState(prev => {
                return {
                    ...prev,
                    years: prev.years + 1
                }
        })
      }
      const [skill, setSkill] = useState([
          {id: uuid(), title: 'Mongo db', purpose: 'database', domain: 'server-side'},
          {id: uuid(), title: 'Express JS', purpose: 'node js framework', domain: 'server-side'},
          {id: uuid(), title: 'React with Hooks', purpose: 'UI/UX javascript library', domain: 'client-side'},
          {id: uuid(), title: 'node JS', purpose: 'javascript runtime', domain: 'server-side'}
      ])

      const addFlavor = () => {
          setSkill([...skill, {id: uuid(), title: 'typescript', purpose: 'javascript subset', domain: 'client-side'}])
      }

    return (
        <>
        <div className='container my-4'>
            <h1>Illustrating UseState Hook in Objects🥪</h1>
            <h2 onClick={changeLanguage}>I learned {state.language} for {state.years} Years.</h2>
            <button onClick={totalYear}>Add Years</button>
        </div>
        <hr/>
        <div className='container my-4'>
        <h2>Minimum Requirements for a Full Stack Developer</h2>
        <p>Despite the prevalent dichotomy between the font end and a backend developers, due to increasing popularity of node js, full stack developer skills are becoming more common. You do not need to learn another language to be full stack developer; knowledge of Javascript with its libraries and frameworks is entirely yielding that elusive designation. Learn MERN stack, you become an in-demand full stack developer. In the table below we display MERN stack:</p><br/>
        <h2> MERN stack Composition </h2>
            <table className="table bg-success">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Purpose</th>
                        <th>Domain</th>
                    </tr>
                </thead>
                <tbody>
                {skill.map ((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.purpose}</td>
                            <td>{item.domain}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <button onClick={addFlavor}>Add Flavor</button>
        </div>
        </>
    )
}

export default First;
