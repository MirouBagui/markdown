import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import MarkdownInput from './components/MarkdownInput'
import MarkdownOutput from './components/MarkdownOutput'
import MarkdownContext from './MarkdownContext'
import './styles/App.scss'
const placeholder = `# Markdown Previewer
## Created by Bagui

###### check out my work (https://www.miroubagui.com)

> **User Story's**
> 1. I can see a \`textarea\` element with a corresponding \`id="editor"\`.
> 2.  I can see an element with a corresponding \`id="preview"\`.
> 3. When I enter text into the \`#editor\` element, the \`#preview\` element is updated as I type to display the content of the textarea.
> 4. When I enter GitHub flavored markdown into the \`#editor\` element, the text is rendered as HTML in the \`#preview\` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
> 5. When my markdown previewer first loads, the default text in the \`#editor\` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
> 6. When my markdown previewer first loads, the default markdown in the \`#editor\` field should be rendered as HTML in the \`#preview\` element.

> **Optional Bonus**
> 1. When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).
> 2. When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).
---

\`\`\`                      
   <p>Hello world! This is HTML CODE BLOCK.</p>          
\`\`\`

---

#### More about the challenge [Build a Markdown Previewer](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).
#### See it in action [HERE]().`;


const App = () => {
    const [markdownResult, setmarkdownResult] = useState(placeholder);
    const contextValue = {
        markdownResult,
        setmarkdownResult
    }
    return (
        <MarkdownContext.Provider value={contextValue}>
            <Container className="containermark" fluid>    
                <MarkdownInput />
                <MarkdownOutput />
            </Container>
        </MarkdownContext.Provider>
    );
}

export default App;

