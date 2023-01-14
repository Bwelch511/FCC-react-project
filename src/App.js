import { useState } from "react";
import { marked } from 'marked'

function App() {
/*a header (H1 size), a sub header (H2 size), 
a link, inline code, a code block, a list item, a blockquote,
 an image, and bolded text */
    const [text, setText] = useState(`
  # This is a header

## This is a sub header

### Link

This is a link to [FreeCodeCamp](https://www.freecodecamp.org/).

### Code Block

  This is an example of a code block

        <html>
          <head>
            <h1>Title</h1>
          </head>


### Inline Code

The span element \`<span>\` in this sentance is inline code.

### List

- This
- is a 
- List

### Blockquote

> The \`<blockquote>\` HTML element indicates that the enclosed text is an extended quotation.

### Image

![Freecodecamp Logo](https://popsql.com/static/external-logos/freecodecamp.png "Freecodecamp Logo")

### Bold Text

**bold text**.

    

;
    `)

marked.setOptions({
  breaks: true
})

  return (
    <div className="App">
      <textarea id="editor" onChange={(event) => {setText(event.target.value);
      }}
      value={text}
      ></textarea>
      <div id="preview" 
      dangerouslySetInnerHTML={{
        __html: marked(text, {breaks: true})
      }}
      ></div>
    </div>
  );
}

export default App;
