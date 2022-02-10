import { useState } from 'preact/hooks';
import IntroductionComponent from './components/IntroductionComponent';
import useCounter from './components/hooks/useCounterHook';
import CustomButton from './components/hooks/CustomButton';

export default function App() {
  const [message, setMessage] = useState('Hello World');
  const { value, Increment } = useCounter();

  return (
    <div>
      <h1>{message}</h1>
      <IntroductionComponent name="sauhardo sengupta" />

      <p>{value}</p>

      <div className="button--row">
        <CustomButton onClick={Increment}>
          <p>Increment</p>
        </CustomButton>

        <CustomButton
          onClick={() => {
            setMessage('Me Too!');
          }}
        >
          I love Preact
        </CustomButton>
      </div>
    </div>
  );
}

//Class Component

// export default class App extends Preact.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World using class components</h1>
//         <IntroductionComponent name="sauhardo sengupta" />
//       </div>
//     );
//   }
// }
