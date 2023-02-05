import StepProcess from './components/StepProcess/StepProcess';
import StepOne from './components/Step/StepOne';
import StepTwo from './components/Step/StepTwo';
import StepThree from './components/Step/StepThree';
import ProcessControl from './components/ProcessControl/ProcessControl';

import './app.module.css';

export default function App() {
  return (
    <div className="App">
      <StepProcess />
      <StepOne />
      {/* <StepTwo /> */}
      {/* <StepThree /> */}
      <ProcessControl />
    </div>
  );
}

