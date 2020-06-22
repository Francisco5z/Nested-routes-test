export function toggle(state, setState) {
  if (state) {
    setState(false)
  }
  if (!state) {
    setState(true);
  }
}