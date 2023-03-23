const { ipcRenderer: ipc } = (window.require && window.require('electron')) || window.electron || null;






const isEE = ipc ? true : false;

export {
  ipc,
  isEE
}
