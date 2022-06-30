import React from "react"; // keep react in scope

// component
function App() {
  return (
    <div>
      {/* javascript function with capitalized name is a component, basic unit of react
      <p>woot woot</p>
      <h1>it's so cold</h1>
      entry file - index.js
      make call to getElementById which is div with the id of root
      inject react app into root div - you can see it in elements of dev tools */}
      {/* how you call components, like writing html */}
      {/* old way of making folders - static */}
      {/* <Folder name="desktop"/> */}

      {/* to show that folder is containing things */}
      <Folder name="Desktop">
        <Folder name="Personal"></Folder>
        <File name="note-to-self.txt"/>
        <File name="one_waddle.doc"/>
      </Folder>

      <Folder name="Applications">
        <File name="linkedin_profile.jpeg"/>
      </Folder>
    </div>
  )
}
// props is what is passed into component
const Folder = (props) => {
  console.log(props)
  // hwo to inline style pt 1
  const border = { border: "2px solid pink" }
  return (
    // how to inline style pt 2
    <div style={border}>
      {/* curly braces prevent eval as text and eval as js instead */}
      <h1>{props.name}</h1>
      <div style={ {marginLeft: "17px"} }>
        {props.children}
      </div>
      
    </div>
  )
}

const File = (props) => {
  return (
    <h2>{props.name}</h2>
  )
}

export default App;
