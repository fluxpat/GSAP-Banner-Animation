var tl,
    imagesLoaded = false,
    backup = false;

$(document).ready(function(){
  preloadAssets();
});

function preloadAssets() {

    var i = [
      "logo_aa.svg",
      "logo-qantas-colour.svg",
      "logo-qantas-mono.svg",
      "shape-mask.svg",
      "shape-red.svg",
      "shape-blue.svg",
      "shape-red-end-frame.svg",
      "shape-red-end-frame2.svg"
    ];

    preloadimages(i).done(function (images) {

        imagesLoaded = true;
        beginAmimation();
    })
}

function beginAmimation(){
  console.log("start animation");
}


// PRE-LOAD IMAGES FUNCTIONALITY ------------------------------------------------------------
function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
