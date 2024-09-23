import React from 'react';
import i1 from '../assets/i1.jpeg'; 
import "../styles/Play.css"

const Play = () => {
    return (
        <>
                    <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Understanding the fork System Call in Unix/Linux
    </h5>
    <p className="card-text">The fork system call in Unix/Linux creates a new process by duplicating an existing one, enabling multitasking and process management. It returns the child's PID to the parent and 0 to the child, allowing both processes to execute concurrently.</p>
    <a href="https://medium.com/@purviporwal1812/understanding-the-fork-system-call-in-linux-a6ce6b238298" className="card-link">link</a>
  </div>
</div>
            <div>
                <img src={i1} alt="NCC Certificate" style={{ width: '300px', height: 'auto' }} />
                <h6>secured an A-certificate in NCC</h6>
            </div>

        </>
    );
}

export default Play;
