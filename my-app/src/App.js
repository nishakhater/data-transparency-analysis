import './App.css';
import StatusGraph from './components/caseStatus';
import BodyCam from './components/caseStatus';
import NoBodyCam from './components/caseStatus';

function App() {
  return (
    <div className="App">
      <h1>Mapping</h1>
      <StatusGraph />
      <div className="d-flex flex-row">
        <BodyCam /> 
        <NoBodyCam /> 
      </div>
    </div>
  );
}

export default App;
