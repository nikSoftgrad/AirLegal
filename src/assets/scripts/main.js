const collapsed = document.querySelector('#collapsed');
const collapsedMenu = document.querySelector('#collapsed-menu');

collapsed.addEventListener('click', function(){
  collapsedMenu.classList.toggle('isOpen');
})
