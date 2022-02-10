import { useState } from 'preact/hooks';

function IntroductionComponent({ name = 'unknown' }) {
  return <p>my name is {name}</p>;
}

//speicial custom hook
function useCounter() {
  const [value, setValue] = useState(0);
  const Increment = () => {
    setValue(value + 1);
  };

  return {
    value,
    Increment,
  };
}
export default function App(props) {
  const [message, setMessage] = useState('Hello World');
  const { value, Increment } = useCounter();

  return (
    <div>
      <h1>{message}</h1>
      <IntroductionComponent name="sauhardo sengupta" />

      <p>{value}</p>

      <div className="button--row">
        <button class="button" onClick={Increment}>
          Increment Counter
        </button>
        <button
          className="button"
          onClick={() => {
            setMessage('Me Too!');
          }}
        >
          I love Preact
        </button>
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
