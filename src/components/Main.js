import StepProcess from './Main/StepProcess/StepProcess';
import StepOne from './Main/Step/StepOne';
import StepTwo from './Main/Step/StepTwo';
import StepThree from './Main/Step/StepThree';
import ProcessControl from './Main/ProcessControl/ProcessControl';


import '../styles/css/main.module.css';

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

