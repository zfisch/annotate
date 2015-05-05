//on first input submit, create an object with video id, name, and annotations
var videoObj = null;

var createObj = function(){
  videoObj = {
    "video": {
      "id": id,
      "name": "SpoonGuitar",
      "annotations": {
        "13": "<div>SIIIIIICK</div>",
        "27": "<div>FUCK YEA</div>",
        "67": "<div>alright, man! sweet spoon</div>"
      }
    }
  }
};

var annotate = function(input){
  if(videoObj === null){
    createObj();
  }
  console.log(videoObj);
};