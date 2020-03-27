import { Store, createConnectedStore } from 'undux';

// Declare your store's types.
type State = {
    buttonText: string;
    clickCount: number;
};

// Declare your store's initial state.
const initialState: State = {
    buttonText: 'Click Me',
    clickCount: 0
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState);

// Export prop types for React (if you're using React Hooks, you can ignore this).
export type StoreProps = {
    store: Store<State>;
};
