import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Home from './Home';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
        <Home />
    </TailwindProvider>
  );
}
