declare module 'react-dom' {
  function experimental_useFormState<State>(
    action: (state: State) => Promise<State>,
    initialState: State,
    permalink?: string
  ): [state: State, dispatch: () => void];
}
