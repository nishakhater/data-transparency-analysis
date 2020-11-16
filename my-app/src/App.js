import './App.css';
import StatusGraph from './components/caseStatus';
import BodyCam from './components/bodycam';
import NoBodyCam from './components/noBodycam';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Mapping</h1>
      <StatusGraph />
      <div className="d-flex flex-row justify-content-center align-items-center">
        <BodyCam /> 
        <NoBodyCam />
      </div>
    </div>
  );
}

export default App;
