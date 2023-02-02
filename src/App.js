import StepProcess from './components/StepProcess/StepProcess';
import StepOne from './components/Step/StepOne';
import ProcessControl from './components/ProcessControl/ProcessControl';

import './app.module.css';

export default function App() {
  return (
    <div className="App">
      <StepProcess />
      <StepOne />
      <ProcessControl />
    </div>
  );
}

