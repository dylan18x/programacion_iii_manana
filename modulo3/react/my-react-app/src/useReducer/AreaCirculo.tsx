
import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

interface State {
  radio: number;
  area: number;
}

interface Action {
  name: string;
  value: number;
}

const initialState: State = {radio: 0,area:0};

function reducer(state: State, action: Action): State {
  return {radio:action.value,area:3.14 * action.value* action.value};
}

export default function AreaCirculo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ name: e.target.name, value: Number(e.target.value) });
  }

  return (
    <form>
      <input
        name="radio"
        value={state.radio}
        onChange={handleChange}
        placeholder="Radio"
      />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}
