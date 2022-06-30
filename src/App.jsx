import React, { useState } from "react"; // keep react in scope
// useState is hook that triggers redrawing component if inforation stored in it changes

// component
function App() {
  return (
    <div style={{ margin: "15px" }}>
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
        <Folder name="Personal">
          <File name="hopes_and_dreams.doc"/>
          <br />
          <File name="sources_of_fiber.xls"/>
        </Folder>
        <File name="note-to-self.txt"/>
        <br />
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
  const [ isOpen, setIsOpen ] = useState(false);
  const { name, children } = props;
  const foldStat = isOpen ? "open" : ""
  const direction = isOpen? "down" : "right"

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      {/* curly braces prevent eval as text and eval as js instead */}
      {/* need to pass function uninvoked or else will pass in the return val */}
      <span onClick={handleClick}>
        <i className={`teal folder ${foldStat} icon`}></i>
        {/* <i className={`caret ${direction} icon`}></i> */}
      </span>
      {name}
      <div style={ {marginLeft: "17px"} }>
        {isOpen? children : null}
      </div>
      
    </div>
  )
}

const File = ({ name }) => {
  const ext = name.split(".")[1];
  const fileIcons = {
    doc: "blue file alternate",
    txt: "yellow sticky note",
    jpeg: "pink file image",
    xls: "green table"
  }
  return (
    <span>
      <i className={`${fileIcons[ext]} icon`}></i>
      {name}
    </span>
  )
}

export default App;
