const btns = document.querySelectorAll('.btn');
let activeButton = null;

btns.forEach((button) => {
  button.addEventListener('click', () => {
    if (activeButton) {
      activeButton.style.backgroundColor = ''; // Đặt lại background của nút trước đó
    }
    button.style.backgroundColor = "#49BBBD"; // Đặt background cho nút hiện tại
    activeButton = button; // Lưu trạng thái của nút hiện tại
  });
});



const product =[
    {id:1,image:"./images/literature_course/book1.png",title:"All Benefits of PLUS"},
    {id:2,image:"./images/literature_course/book2.png",title:"All Benefits of PLUS"},
    {id:3,image:"./images/literature_course/book3.png",title:"All Benefits of PLUS"},
    {id:4,image:"./images/literature_course/book4.png",title:"All Benefits of PLUS"},
    {id:5,image:"./images/literature_course/book5.png",title:"All Benefits of PLUS"},
    {id:6,image:"./images/literature_course/book1.png",title:"All Benefits of PLUS"},
    {id:7,image:"./images/literature_course/book6.webp",title:"All Benefits of PLUS"},
    {id:8,image:"./images/literature_course/book7.jpg",title:"All Benefits of PLUS"},
    {id:9,image:"./images/literature_course/book8.jpg",title:"All Benefits of PLUS"},
    {id:10,image:"./images/literature_course/book9.jpg",title:"All Benefits of PLUS"},
    {id:11,image:"./images/literature_course/book10.jpg",title:"All Benefits of PLUS"},
    {id:12,image:"./images/literature_course/book11.jpg",title:"All Benefits of PLUS"},
    {id:13,image:"./images/literature_course/book12.jpg",title:"All Benefits of PLUS"},
    {id:14,image:"./images/literature_course/book13.webp",title:"All Benefits of PLUS"},
    {id:15,image:"./images/literature_course/book14.jpg",title:"All Benefits of PLUS"},
    {id:16,image:"./images/literature_course/book15.jpg",title:"All Benefits of PLUS"},
    {id:17,image:"./images/literature_course/book16.jpg",title:"All Benefits of PLUS"},
    {id:18,image:"./images/literature_course/book17.jpg",title:"All Benefits of PLUS"},
    {id:19,image:"./images/literature_course/book18.jpg",title:"All Benefits of PLUS"},
    {id:20,image:"./images/literature_course/book19.jpg",title:"All Benefits of PLUS"},
    {id:21,image:"./images/literature_course/book20.jpg",title:"All Benefits of PLUS"},
    {id:22,image:"./images/literature_course/book21.jpg",title:"All Benefits of PLUS"},
    {id:23,image:"./images/literature_course/book22.jpg",title:"All Benefits of PLUS"},
    {id:24,image:"./images/literature_course/book23.jpg",title:"All Benefits of PLUS"},
    {id:25,image:"./images/literature_course/book24.jpg",title:"All Benefits of PLUS"},
    {id:26,image:"./images/literature_course/book25.jpg",title:"All Benefits of PLUS"},
    {id:27,image:"./images/literature_course/book26.jpg",title:"All Benefits of PLUS"},
    {id:28,image:"./images/literature_course/book7.jpg",title:"All Benefits of PLUS"},
    {id:29,image:"./images/literature_course/book12.jpg",title:"All Benefits of PLUS"},
    {id:30,image:"./images/literature_course/book8.jpg",title:"All Benefits of PLUS"},
];
let itemsInPage=6;
let currentPage=1;
let start=0;
let end=itemsInPage;
let totalPage=Math.ceil(product.length/itemsInPage);
const btnNext=document.querySelector('.btn_next');
const btnPre=document.querySelector('.btn_pre');
 function getCurrentPage(currentPage){
    start = itemsInPage * (currentPage - 1);
    end = currentPage * itemsInPage;
}
//=========================Hiển thị dữ liệu===================
function renderProduct(){
    const pro=document.querySelector("#product");
    const content=product.map((item,index)=>{
        if(index>=start && index<end){
        return `  <div class=" w-[90%] mx-auto md-full rounded-[10px]  bg-[white] xl:shadow-2xl md:shadow-lg shadow-xl shadow-[#b8b8b8] border-[1px] h-auto">
        <div class="px-7 ">
        <div class="overflow-hidden "> <img class=" rounded-[10px]  mt-[30px] mb-[28.13px] transform hover:scale-105 transition duration-300 ease-in-out w-[85%] h-[400px] mx-auto md:h-[300px] md:w-full" src="${item.image}" alt="">  </div>
           <div class=" flex justify-between  md:flex-col-reverse xl:flex-row items-center pb-[31.35px]">
            <p class="text-[#333333] font-normal tracking-[0.5px] xl:text-[19px] md:text-[13px] text-lg md:text-center text-start xl:text-start hover:underline  hover:decoration-solid cursor-pointer">${item.title}</p>
            <p class="text-[#6dc9ca] xl:text-[25px] md:text-sm text-[22px] font-semibold tracking-[0.6px]">$24</p>
           </div>
        </div>
    </div>`;
        }
    })
    pro.innerHTML = content.join(''); 
    // pro.innerHTML=`${content}`;
}
renderProduct();
//=====================Hiển thị số trang=======================
list=[{id:1},{id:2},{id:3},{id:4},{id:5}];
function renderListPage() {
    const numbers = document.querySelector('.numbers');
    const listPage = list.map((item) => {
      return ` <button class="h-10 w-10 text-xl  hover:text-white  hover:bg-[#49BBBD]">${item.id}</button> `;
    });
    numbers.innerHTML = listPage.join('');
  }
  renderListPage();
  //====================Change Page============================
  function changePage(){
    const currentPages=document.querySelectorAll(".numbers button");
    
    for(let i=0;i<currentPages.length;i++){
        currentPages[i].addEventListener('click',()=>{
           var value=i+1;
            currentPage=value;
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
  }
  changePage();
//====================Thêm sự kiện btn Next==================
btnNext.addEventListener('click',()=>{
    currentPage++;
    if(currentPage>totalPage){
        currentPage=5;
    }
    getCurrentPage(currentPage);
    renderProduct();
    // Thêm hiệu ứng chuyển trang
//    window.scrollTo({ top: 0, behavior: 'smooth' });
})
//====================Thêm sự kiện btn Previous==================
btnPre.addEventListener('click',()=>{
    currentPage--;
    if(currentPage<=1){
        currentPage=1;
    }
  getCurrentPage(currentPage);
    renderProduct();
    // Thêm hiệu ứng chuyển trang
//    window.scrollTo({ top: 0, behavior: 'smooth' });
})



