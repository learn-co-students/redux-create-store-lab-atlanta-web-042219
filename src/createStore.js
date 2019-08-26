export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  dispatch({ type: '@INT' })
  return {
    dispatch,
    getState
  }
}

function render() {
  let container = document.getElementById('container');
}
