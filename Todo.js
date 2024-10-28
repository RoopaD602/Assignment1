import React, { useState } from 'react';

function ToDoList() {
    const [content, setContent] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (content.trim() !== "") {
            setTasks([...tasks, content]);
            setContent(""); 
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="Cont">
            <div className="sub-cont">
                <input
                    type="text"
                    id="list"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter a task"
                />
                <button onClick={addTask}>ADD</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button id="remove" onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <h2>1) What is the purpose of useState in React?</h2>
            <i>The useState hook in React is used to manage state in functional components.
            Declare State Variables: You can declare state variables by calling useState, which returns an array with two elements: the current state value and a function to update that state.
            Initialize State: The argument you pass to useState is the initial value of the state variable. In the example above, count starts at 0.

            Update State: You can update the state using the updater function (e.g., setCount). When the state is updated, the component re-renders to reflect the new state.

            Preserve State Across Renders: State variables retain their values between re-renders, allowing you to maintain component state across user interactions and other events.

            Multiple States: You can call useState multiple times within a single component to manage different pieces of state.
            </i>
        <h2>
        2) How do you initialize state in a functional component using useState?
        </h2>
        <i>In a functional component, you can initialize state using the useState hook from React. Here's how you can do it:<br></br>

       1) Import the useState hook from React.<br></br>
        2) Call useState with the initial state value you want to set.<br></br>
        3) Destructure the returned array to get the current state and the function to update that state.</i>


            <h2>3). Explain the difference between using useState in functional components vs. using this.setState in class components.</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Feature</th>
              <th>useState in Functional Components</th>
              <th>this.setState in Class Components</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Syntax</td>
              <td>const [state, setState] = useState(initialValue);</td>
              <td>this.state = object key: value; (in constructor)</td>
            </tr>
            <tr>
              <td>State Merging</td>
              <td>Requires manual merging</td>
              <td>Automatic merging</td>
            </tr>
            <tr>
              <td>Multiple State Variables</td>
              <td>Yes, multiple useState hooks</td>
              <td>Single this.state object</td>
            </tr>
            <tr>
              <td>Lifecycle Management</td>
              <td>Uses useEffect</td>
              <td>Built-in lifecycle methods</td>
            </tr>
            <tr>
              <td>Updates Based on Previous State</td>
              <td>Pass function to setState</td>
              <td>Pass function to this.setState</td>
            </tr>
          </tbody>
        </table>
        </div>
    );
}

export default ToDoList;


