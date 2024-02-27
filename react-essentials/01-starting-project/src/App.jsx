import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header.jsx'
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';


function App() {
  const [tabContent, setTabContent] = useState();

  function handleClick(selectedButton) {
    setTabContent(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {(CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />))}
        </ul>
      </main>
      <main id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={tabContent === "components"} onClick={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={tabContent === "jsx"} onClick={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={tabContent === "props"} onClick={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={tabContent === "state"} onClick={() => handleClick('state')}>State</TabButton>
        </menu>
        {!tabContent ? (
          <p>Please select a topic.</p>
        ) : (
          <div id='tab-content'>
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
