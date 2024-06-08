var users=[{
  profilePic:"./images/4.avif ",
  displayPic:"./images/11.avif",
  pendingMessage:4,
  location:"Pune,India",
  name:"Anikita",
  age:"21",
  bio:"Artist by day, dreamer by night. Whether I’m painting on canvas or crafting new dreams, I’m looking for someone to share the beauty of life with.",
  isFriend:null,
},
{
  profilePic:"./images/1.avif",
  displayPic:"./images/22.avif",
  pendingMessage:5,
  location:"Mumbai,India",
  name:"Shraddha",
  age:"21",
  bio:"Artist by day, dreamer by night. , I’m looking for someone to share the beauty of life with.",
  isFriend:null,
},
{
  profilePic:"./images/3.avif ",
  displayPic:"./images/33.avif",
  pendingMessage:3,
  location:"Nashik,India",
  name:"Shruti",
  age:"23",
  bio:" Whether I’m painting on canvas or crafting new dreams, I’m looking for someone to share the beauty of life with.",
  isFriend:null,
},
{
  profilePic:"/images/2.avif ",
  displayPic:"./images/44.avif",
  pendingMessage:4,
  location:"Pune,India",
  name:"Shweta",
  age:"25",
  bio:"Artist by day, dreamer by night. Whether I’m painting on canvas or crafting new dreams.",
  isFriend:null,
},
]
function select(elem){
  return document.querySelector(elem)
 }
var curr=0;
(function setInitial(){
  select(".maincard img").src=users[curr].displayPic;
  select(".incommingcard img").src=users[curr+1]?.displayPic;
  select(".img img").src=users[curr].profilePic;
  select(".badge").textContent=users[curr].pendingMessage;
  select(".location h3").textContent=users[curr].location;
  select(".name h1:nth-child(1)").textContent=users[curr].name;
  select(".name h1:nth-child(2)").textContent=users[curr].age;
  select(".bio").textContent=users[curr].bio;
  curr=2;
  
})();
function imgChange(){
 var tl=gsap.timeline({
  onComplete:function(){
    let main=select(".maincard");
    let incomming=select(".incommingcard");
    incomming.classList.remove("z-[2]");
    incomming.classList.add("z-[2]");
    incomming.classList.remove("incommingcard");
    main.classList.remove("z-[3]");
    main.classList.add("x-[2]");
    gsap.set(main,{
      opacity: 1,
      scale:1
    })
  main.classList.remove("incommingcard");
  incomming.classList.add("maincard");
  main.classList.add("incommingcard")
  }
  
 });
 tl.to(".maincard",{
  scale:1.1,
  opacity:0,
  ease:Circ,
  duration:0.9
 },"a")
 tl.from(".incommingcard",{
  scale:0.9,
  opacity:0,
  ease:Circ,
  duration:1.1
 },"a")
 }
 let deny= select(".deny");
 let accept= select(".accept");

 deny.addEventListener("click", function(){
   imgChange();
 });