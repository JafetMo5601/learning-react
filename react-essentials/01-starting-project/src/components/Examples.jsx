import TabButton from "./TabButton"
import { EXAMPLES } from "../data"
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs"

export default function Examples() {
    const [tabContent, setTabContent] = useState();

    function handleClick(selectedButton) {
        setTabContent(selectedButton);
        console.log(selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs 
            buttons={
                <menu>
                    <TabButton isSelected={tabContent === "components"} onClick={() => handleClick('components')}>Components</TabButton>
                    <TabButton isSelected={tabContent === "jsx"} onClick={() => handleClick('jsx')}>JSX</TabButton>
                    <TabButton isSelected={tabContent === "props"} onClick={() => handleClick('props')}>Props</TabButton>
                    <TabButton isSelected={tabContent === "state"} onClick={() => handleClick('state')}>State</TabButton>
                </menu>
            }>
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
            </Tabs>
        </Section>
    )
}