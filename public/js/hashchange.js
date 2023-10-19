// A quick fix to remove hash changes in the address bar. There's probably a better way of doing this
window.addEventListener(
  'hashchange',
  () => window.history.pushState({}, '', '/'),
  {}
);
