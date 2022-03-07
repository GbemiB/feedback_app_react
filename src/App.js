import React from 'react';

// function App() {
//     return (
//         <><h1>Hello, My name is Gbemisola Bello.
//             I'm a passionate Software Engineer. I've decided to
//             step up my skills by picking up react framework
//             i'm exicted to start this journey..</h1><p>Today: 7 March 2022</p></>
//     )
// }



// function App() {
//     return (
//         React.createElement(
//             'div', {className: 'container'}, React.createElement('hi', {}, 'MY REACT APPLICATION')
//         )
//     )
// }


function App() {
    const title = 'My name is Gbemisola';
    const value = 'I am blessed...so blessed';
    const showComment = true;
    const comment = [
        { id: 1, text: 'Value One' },
        { id: 2, text: 'Value Two' },
        { id: 3, text: 'Value Three' },
        { id: 4, text: 'Value Four' },
        { id: 5, text: 'Value Five' },
    ]
    return (
        <div>
            <div>{title.toUpperCase()}</div>
            <div>{value}</div>
            {5 + 5}

            {showComment ? (<div>
                <h3>Comments({comment.length})</h3>
                <ul>
                    {
                        //Each list element should have a unique id either using index or comment id
                        comment.map((comment, index) => (
                            <li key={comment.id}>{comment.text}</li>
                        ))}
                </ul>
            </div>) : ('No')}



            {showComment && (<div>

                <h3>Comments({comment.length})</h3>
                <ul>
                    {
                        //Each list element should have a unique id either using index or comment id
                        comment.map((comment, index) => (
                            <li key={comment.id}>{comment.text}</li>
                        ))}
                </ul>
            </div>)}

        </div>
    )
}

export default App