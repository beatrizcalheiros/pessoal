
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);

}

$('#photos').append(allImages);


function toggleVisibility(selectedTab) {

         var work = document.getElementsByClassName('work');

         for(var i=0; i<work.length; i++) {
              if(work[i].id == selectedTab) {
                    work[i].style.display = 'none';
              } else {
                    work[i].style.display = 'block';
              }
         }

    }
