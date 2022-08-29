var btn = document.querySelector('#loadmore')
var currentItem = 2;
function loadmore(){
  let boxes1 = [...document.querySelectorAll('.news__1')];
  let boxes2 = [...document.querySelectorAll('.news__2')];
  for ( var i = currentItem; i < currentItem + 1; i++){
    boxes1[i].style.display = 'block';
    boxes2[i].style.display = 'block';
  }
  currentItem +=1;
  if(currentItem >= boxes1.length ){
    btn.style.display = 'none'
  }
}


function openSearch() {
    document.getElementById("fullsearch").style.display = "block";
}

function closeSearch() {
    document.getElementById("fullsearch").style.display = "none";
}
