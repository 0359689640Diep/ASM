function menu(){
    const menu = document.querySelector(' #SlideBar');
    const icon = document.querySelector(' .tiv-menu');
    menu.style.display = 'block';
    icon.style.display = 'none';
    const SlideBarIcon = document.querySelector(' #SlideBarIcon');
    const AA1=document.querySelector(' #AA1');
    SlideBarIcon.onclick=function(){
        menu .classList.toggle('hide');
        AA1 .classList.toggle('expand');
    }
}
function menu1(){
    const menu = document.querySelector(' #SlideBar');
    const icon = document.querySelector(' .tiv-menu');
   menu.style.display='none';
    icon.style.display='block';
} 
function convert(type){
    if(type === "home"){
        window.location.replace('../home.html');

    }
    else if(type === "SignIn"){
        window.location.replace('../SignIn.html')
    }
    else if(type === "LogIn"){
        alert("You need to login to use the service");
        window.location.replace("../Login.html");
    }
    else if(type === "Im"){
        window.location.replace("../DACN/index.html")
    }
    else if(type =="UserScreen"){
        window.location.replace('../UserScreen.html');

    }
    else{
        alert("Eroor...khong co type nao ban muon")
    }
}
function ToExamine() {
    // lay tat ca cau hoi trong class questions
   var questions= document.querySelectorAll(".questions input[type='radio']");
//    dem cau tra loi dung
 var correctAnswers=0;
 console.log(questions)
//  lap lai qua cac cau hoi va kiem ta cau tra loi cua tung cau hoi 
for(var i = 0; i < questions.length; i++){
    var question = questions[i];
    var a1;
    // kiem tra cau hoi nay co duoc chon hay khong
    if(question.checked){
        // kiem tra gia tri cua cau tra loi co dung hay khong
        if (question.value === 'true'){
            correctAnswers++;
        }
        else{
            // phương thức `.parentNode` của phần tử input để truy cập đến phần tử label, và sử dụng thuộc tính 
            question.parentNode.style.backgroundColor = 'red';
    
        }
    }
}
    var result = document.getElementById('result');
    result.innerHTML=correctAnswers + "/ 4" + " = "+correctAnswers*2.5 +"d";
}
function refresh(){
    window.location.reload();
}