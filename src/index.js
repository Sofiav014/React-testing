import { createRoot } from 'react-dom/client';
import Checkbox from './components/Checkbox';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Checkbox labelActive="Active" labelInactive="Inactive" />)