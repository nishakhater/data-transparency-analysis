import './App.css';
import StatusGraph from './components/caseStatus';
import BodyCam from './components/bodycam';
import NoBodyCam from './components/noBodycam';
import Charges from './components/charges';
import ChargesPie from './components/chargesPie';
import ChargesPie2 from './components/chargesPie2';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Mapping</h1>
      <StatusGraph />
      <Charges />
      <div className="d-flex flex-row justify-content-center align-items-center py-4 ">
        <div className="px-4">
          <ChargesPie />
        </div>
        <div className="px-4">
          <ChargesPie2 />
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center align-items-center">
        <BodyCam />
        <NoBodyCam />
      </div>
    </div>
  );
}

export default App;
