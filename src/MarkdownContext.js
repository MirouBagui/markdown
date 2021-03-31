import React from 'react';

const defaultContext = {
    markdownInput: '',
    setMarkdown : () => {}
}

export default React.createContext(defaultContext);
