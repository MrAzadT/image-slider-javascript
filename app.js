const img = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",
  "img-6.jpg",
  "img-6.jpg",
];

let count = 0;
let imgId = document.getElementById("imgId");
setInterval(() => {
  if (count >= img.length) count = 0;
  const imgUrl = img[count];
  imgId.setAttribute("src", imgUrl);
  count++;
}, 1500);
