import Routes from './routes'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='containerMenu'>
      <Routes />
      <Toaster />
    </div>
  );
}

export default App;