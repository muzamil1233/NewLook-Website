const wrapper = document.querySelector(".sliderWrapper")
// wrapper.style.transform = "translateX(-400vw)"
const menuItems = document.querySelectorAll(".menuitem")
const products = [
    {
      id: 1,
      title: "HAND TILLA",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/tilla 2.jpg",
        },
        {
          code: "golden",
          img: "./images/TILLA1.3.jpg",

        },
      ],
    },
    {
      id: 2,
      title: "AARI WORK",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/aari 1.1.jpg",
        },
        {
          code: "green",
          img: "./images/aari1.2.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "DAPKA WORK",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/dapka 1.jpg",
        },
        {
          code: "green",
          img: "./images/dapka 2.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "THREAD EMBROIDERY",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/m E 1.jpg",
        },
        {
          code: "lightgray",
          img: "./images/ME2.jpg",
        },
      ],
    },
    {
      id: 5,
      title: "MACHINE WORK",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/MACHINE TILLA 2.webp",
        },
        {
          code: "black",
          img: "./images/MACHINE TILLA 1.JPG",
        },
      ],
    },
  ];
  let  chosenProducts =  products[0]
 const currentProductImg = document.querySelector(".productImg")
 const currentProductTitle = document.querySelector(".productTitle")
 const currentProductPrice = document.querySelector(".productPrice")
 const currentProductColor = document.querySelectorAll(".color")
 const currentProductSize = document.querySelectorAll(".size")

 menuItems.forEach((item,index) => {
    item.addEventListener("click",()=>{
       wrapper.style.transform = `translateX(${ -100 * index}vw)`;
       chosenProducts = products[index]


       currentProductTitle.textContent = chosenProducts.title
       currentProductPrice.textContent = "$"+ chosenProducts.price
       currentProductImg.src = chosenProducts.colors[0].img;

       currentProductColor.forEach((colors,index) => {
      colors.style.background = chosenProducts.colors[index].code
       })
    });
});

   currentProductColor.forEach((colors,index)=>{
    colors.addEventListener("click",()=>{
        currentProductImg.src=chosenProducts.colors[index].img
    })
   })
   currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size,index)=>{
            size.style.backgroundColor="white"
            size.style.color="black"  
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
   })
   const productButton =document.querySelector(".productButton");
   const payment = document.querySelector(".payment");
   const close = document.querySelector(".close");


   productButton.addEventListener("click",()=>{
    payment.style.display = "flex";
   })

   close.addEventListener("click",()=>{
   payment.style.display = "none";
   })