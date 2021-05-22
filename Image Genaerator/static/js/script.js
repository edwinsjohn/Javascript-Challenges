function generateCat(){
  var image=document.createElement("img");
  var div=document.getElementById("flex-box-container-1");
  image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}