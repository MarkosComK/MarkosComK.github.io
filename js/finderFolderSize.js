// select all the elements with class "folder-img"
const folders = document.querySelectorAll('#folder-img');

// select button sizes
const smallBtn = document.querySelector('#smallBtn');
const mediumBtn = document.querySelector('#mediumBtn');
const bigBtn = document.querySelector('#bigBtn');

// add a listenet to each button
smallBtn.addEventListener('click', () => setFolderSize('small-img'));
mediumBtn.addEventListener('click', () => setFolderSize('medium-img'));
bigBtn.addEventListener('click', () => setFolderSize('big-img'));

// function to change folder sizes
function setFolderSize(size) {
  // dont repeat all the code if click on the same button
  if (folders[0].classList.contains(size)) {
    return;
  }

  // remove all classes from the folder
  folders.forEach(folder => {
    folder.classList.remove('small-img', 'medium-img', 'big-img');
  });

  // add the corresponding class
  folders.forEach(folder => {
    folder.classList.add(size);
  });
}