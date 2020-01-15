import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';

import './Sidebar.css';
import './Main.css';

function App() {
    const [github_username, setGithubUsername] = useState('';)
    const [techs, setTechs] = setState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                 const { latitude, longitude } = position.coords
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleAddDev(e){
        e.preventDefault();
    }
  
  
  return (
    <div id="app">
      <aside>
        <strong>Sign Up</strong>
        <form>
            <div className="input-block">
                <label htmlFor="github_username">GitHub Username</label>
                <input 
                    type="text" 
                    name="github_username" 
                    id="github_username" 
                    required
                    value={github_username}
                    onChange = {e => setGithubUsername(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Techs</label>
                <input 
                    type="text" 
                    name="techs" 
                    id="techs" 
                    required
                    value={techs}
                    onChange = {e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input 
                        type="text" 
                        name="latitude" 
                        id="latitude" 
                        required 
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input 
                        type="text" 
                        name="longitude" 
                        id="longitude" 
                        required 
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Register</button>

        </form>
      </aside>
      <main>
        <ul>

            <li className="dev-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/36746834?s=460&v=4" alt="Davis JR"/>
                    <div className="user-info">
                      <strong>Davis JR</strong>
                      <span>React JS, React Native, NodeJS</span>
                    </div>
                </header>
                <p>Web/Mobile Developer & Le Wagon Alumni</p>
                <a href="https://github.com/davisjr2000">GitHub Profile</a>
            </li>

            <li className="dev-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/36746834?s=460&v=4" alt="Davis JR"/>
                    <div className="user-info">
                      <strong>Davis JR</strong>
                      <span>React JS, React Native, NodeJS</span>
                    </div>
                </header>
                <p>Web/Mobile Developer & Le Wagon Alumni</p>
                <a href="https://github.com/davisjr2000">GitHub Profile</a>
            </li>

            <li className="dev-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/36746834?s=460&v=4" alt="Davis JR"/>
                    <div className="user-info">
                      <strong>Davis JR</strong>
                      <span>React JS, React Native, NodeJS</span>
                    </div>
                </header>
                <p>Web/Mobile Developer & Le Wagon Alumni</p>
                <a href="https://github.com/davisjr2000">GitHub Profile</a>
            </li>

            <li className="dev-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/36746834?s=460&v=4" alt="Davis JR"/>
                    <div className="user-info">
                      <strong>Davis JR</strong>
                      <span>React JS, React Native, NodeJS</span>
                    </div>
                </header>
                <p>Web/Mobile Developer & Le Wagon Alumni</p>
                <a href="https://github.com/davisjr2000">GitHub Profile</a>
            </li>

        </ul>
      </main>
    </div>
  );
}

export default App;