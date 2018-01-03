function checkOnclickEvent(param) {
    console.log(param);
  }
  var ulList = document.getElementById('list');
  var add = document.getElementById('addElem');
  var liList = document.getElementsByTagName("li");
  
add.addEventListener('click', function(e) {
    var newElementLi = document.createElement('li');
    var counter = liList.length;


                newElementLi.appendChild(document.createTextNode('item ' + counter));
                newElementLi.className += 'list-group-item';
                ulList.appendChild(newElementLi);
                counter = liList.length + 1;
        
  });

    var addSpan = document.getElementById('addSpan');
addSpan.addEventListener('click', function(e) {
    var  createSpan = ulList.children;
    for (var i=0; i < liList.length; i++) {
        createSpan[i].innerHTML = "<span class='badge'>" + i + "</span> item";

    }
});
  
    
        