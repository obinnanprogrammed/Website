import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (container) {
  console.log("Rendering.");
  const root = createRoot(container);
  root.render(<App />);
}