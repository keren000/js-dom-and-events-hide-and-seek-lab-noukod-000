function getFirstSelector(selector){
  return  document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(num){
  const lis = document

  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

for (let n = 0; n < lis.length; n++) {
  lis[n].innerHTML = parseInt(lis[n].innerHTML) + num;
}
}

    function deepestChild(){
      return document.querySelector('#grand-node').querySelectorAll('div')[3]
}
