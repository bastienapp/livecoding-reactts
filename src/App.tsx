import InputField from './components/InputField';
import TextField from './components/TextField';

function App() {
  return (
    <div className='App'>
      <TextField text='Votre nom:' />
      <InputField type='text' placeholder='username' />
    </div>
  );
}

export default App;
