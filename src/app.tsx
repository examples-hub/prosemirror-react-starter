import './index.scss';
import './editor-examples.css';

import * as React from 'react';

import { PMExampleSetupBasicEditor } from './components';

export const App = () => {
  return (
    <div>
      <h1>Hello, ProseMirror 示例 202209 </h1>
      <PMExampleSetupBasicEditor />
    </div>
  );
};

export default App;
