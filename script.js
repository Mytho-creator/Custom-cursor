
const cursor = document.querySelector(".cursor");
 const main = document.querySelector("#main");
  console.log(main);
  console.log(cursor);

main.addEventListener("mousemove",function(dets){
cursor.style.left = dets.x + "px"
cursor.style.top = dets.y + "px"
  
});











