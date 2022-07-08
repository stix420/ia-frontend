/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import './stix.module.css'
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
