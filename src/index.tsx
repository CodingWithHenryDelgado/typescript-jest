import { createRoot } from 'react-dom/client';
import { App } from './Components/App';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
document.getElementById('root')
