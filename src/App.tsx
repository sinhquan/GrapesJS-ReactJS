import 'grapesjs-preset-webpage';
import 'grapesjs-preset-newsletter';
import "grapesjs-plugin-forms";
import gjsForms from 'grapesjs-plugin-forms';
import thePlugin from "grapesjs-plugin-export";
import pluginTooltip from "grapesjs-tooltip";
import './App.css'
import "grapesjs/dist/css/grapes.min.css";
import { GrapesjsReact } from 'grapesjs-react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    editor: any;
  }
}

export const Primary = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      'gjs-preset-webpage',
      'gjs-preset-newsletter',
      'gjs-blocks-basic',
      (editor) => thePlugin(editor, {}),
      (editor) => gjsForms(editor, {}),
      (editor) => pluginTooltip(editor, {}),
    ]}
    onInit={(editor) => {
      window.editor = editor;
    }}
  />;
};
function App() {

  return (
    <>
      <Primary />
    </>
  )
}

export default App
