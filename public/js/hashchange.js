// A quick fix to remove hash changes in the address bar. There's probably a better way of doing this
window.addEventListener(
  'hashchange',
  () => {
    var uri = window.location.toString();
    if (uri.indexOf('#') > 0) {
      const cleanURI = uri.substring(0, uri.indexOf('#'));
      window.history.replaceState({}, document.title, cleanURI);
    }
  },
  {}
);
