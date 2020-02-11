const collapsed = document.querySelector('#collapsed');
const collapsedMenu = document.querySelector('#collapsed-menu');

// mobile header
collapsed.addEventListener('click', function(){
  collapsedMenu.classList.toggle('isOpen');
})

// tabs
document
  .querySelectorAll('.tabs__item')
  .forEach(item=>{
    item.addEventListener('click', function(e){
      document
        .querySelectorAll('.tabs__item')
        .forEach(item=>item.classList.remove('active'))

      this.classList.add('active')
    })
  })

// accordion
document
  .querySelectorAll('.accordion__item')
  .forEach(item=>{
    item.addEventListener('click', function(e){
      this.classList.toggle('isActive')
    })
  })
