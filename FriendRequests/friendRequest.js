var btn = document.querySelector("#btn");
var title = document.querySelector("h3");
var profile = document.querySelector("#profile");
var post = document.querySelector("#post");
var card = document.querySelector(".card");
var like = document.querySelector("#like");
var post_posi = document.querySelector("#img-container");
var main = document.querySelector(".main");
var dumy_main = document.querySelector("#dumy-main");
var cursor = document.querySelector("#main-cursor");
var heart = document.querySelector("#heart");

var flag = 0;
// card.addEventListener("mouseenter", function () {
//     console.log(1)
//     cursor.style.opacity=1;
//     cursor.style.backgroundColor="transparent";
//   })

// dumy_main.addEventListener("mousemove", function (dets) {
//     cursor.style.opacity = 1;
//     cursor.style.left = dets.x  + "px";
//     cursor.style.top = dets.y + "px";
//   });
// dumy_main.addEventListener("mouseout", function (dets) {
//     cursor.style.opacity = 1;
//     cursor.style.left = dets.x  + "px";
//     cursor.style.top = dets.y + "px";
//   });

btn.addEventListener("click", function () {
  if (flag == 0) {
    btn.innerHTML = "<b>Remove</b>";
    post_posi.addEventListener("dblclick", function () {
      heart.style.opacity = 1;
      setTimeout(() => {
        heart.style.opacity = 0;
      }, 500);
    });
    title.innerHTML = "Friends";
    title.style.color = "green";

    console.log("friends");
    profile.style.opacity = 0;
    post.style.opacity = 1;
    btn.style.backgroundColor = "deeppink";
    post_posi.addEventListener("mousemove", function (dets) {
      like.style.opacity = 1;
      like.style.left = dets.x - 640 + "px";
      like.style.top = dets.y - 143 + "px";
    });
    post_posi.addEventListener("mouseleave", function (dets) {
      like.style.opacity = 0;
    });


    flag = 1;
  } else {
    heart.style.zIndex = "2";
    like.style.opacity = 0;

    btn.innerHTML = "<b>Add Friend</b>";
    title.innerHTML = "Stranger";
    title.style.color = "red";

    like.style.opacity = 0;

    console.log("not friends yet");
    profile.style.opacity = 1;
    post.style.opacity = 0;
    btn.style.backgroundColor = "#518689";
    flag = 0;
  }
});
