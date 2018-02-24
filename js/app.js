// ES5 for older phones
var controller, i;
var datGuiFolderElement = { folder: " 00" }; // dat.GUI needs an object
var folders = [];
var gui = new dat.GUI();
var scene = document.querySelector('a-scene');

for (i = 1; i < 50; i++) {
  folders.push(i < 10 ? " 0" + i : " " + i); // the leading space is a workaround for a dat.GUI bug sorting strings
}

controller = gui.add(datGuiFolderElement, 'folder', folders);

folder = localStorage.getItem("folder");
if (folder == null) {
  folder = "01"; // default
}
controller.setValue(folder);

document.getElementById('p1').setAttribute('src', `assets/${folder}/panel1.png`);
document.getElementById('p2').setAttribute('src', `assets/${folder}/panel2.png`);
document.getElementById('p3').setAttribute('src', `assets/${folder}/panel3.png`);
document.getElementById('p4').setAttribute('src', `assets/${folder}/panel4.png`);
document.getElementById('p5').setAttribute('src', `assets/${folder}/panel5.png`);
document.getElementById('p6').setAttribute('src', `assets/${folder}/panel6.png`);

controller.onFinishChange(function (selected) {
  var folder = selected.substring(1); // workaround for dat.GUI bug sorting strings
  localStorage.setItem("folder", folder);
  location.reload(); // set the folder number and reload the page
})

// this all has to run before scene.hasLoaded
// hacky, all this
// not nice

if (scene.hasLoaded === true) {
  run();
} else {
  scene.addEventListener('loaded', run);
}

function run() {
}
