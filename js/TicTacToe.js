
function menu(){
    const menu = document.querySelector(' .menu');
    menu.style.display = 'flex';
const nav = document.querySelector(' .menu');
const toggle_menu = document.querySelector(' .toggle_menu');
const content1 = document.querySelector(' .content1');
toggle_menu.onclick=function(){
    // thiết lập trạng thái ẩn cho toggle_menu
    nav.classList.toggle('hide');
    // thiết lập trạng thái hien cho content1
    content1.classList.toggle('expand');
}

}
function start(){
    var Mode = document.getElementById('Mode').value;
    var Level = document.getElementById('Level').value;
    var error = document.getElementById('Notification');
    var ContetnMain2 = document.getElementById('ContetnMain2');
    var ContetnMain1 = document.getElementById('ContetnMain1');
    error.style.color='red';
    
    if(Mode === ''){
        if( Level === ''){
           error.innerHTML= "Please fill in all the information"
            // alert()
        }
    }
        else{
            if(Mode === 'OnePeople' && Level === 'Easy'){
                ContetnMain2.style.display='flex';
                ContetnMain1.style.display='none';
                var computer = '';
                var board = ['', '', '', '', '', '','' ,'' ,''];
                var player=prompt("X or O go first......");
                if(player === 'x' || player === 'X'){
                    player = "X";
                    computer = "O"
                }
                else if(player === 'o' || player === 'O'){
                    player = "O";
                    computer = "X"
                }else{
                    var player = alert("Invalid data. Please re-enter");
                    var player = prompt("X or O go first....");
                }
                // xét giá trị nào sẽ chạy trước 
                function Player(){
                    player = player === 'X' ? 'O' : 'X';

                }
                // vẽ lại bàn cờ
                function render(){
                    var html = '';
                    for(var i = 0; i < 9; i++) {
                        html += '<div class="square" id="square' + i + '">' + board[i] + '</div>'
                    }
                    document.getElementById('ContetnMain2').innerHTML = html;
                }
                // kiểm tra ai thắng
                function winner() {
                    
                    var lines = [
                        // hang ngang
                        [0,1,2],[3,4,5], [6,7,8],
                        // hang doc
                        [0,3,6], [1,4,7], [2,5,8],
                        // cheo trai
                        [0,4,8], 
                        // cheo phai
                        [2,4,6]
                    ]
                    // gán các giá trị trong từng mảng vào các biến 
                    for (var i = 0; i < lines.length; i++) {
                    var [a, b, c] = lines[i];
                    // kiểm tra xem các giá trị gần nhau ở các cột và hàng có giống nhau không
                    if(board[a] !== '' && board[a] === board[b] && board[b] === board[c]){
                        return board[a];
                    }
                }
                    // kiem tra bàn cờ đã được điền đầy dủ hay chưa nếu chưa thì tiếp tục,nếu rồi mà không có ai thắng thì trả về hòa 
                    if (board.includes('')){
                        return '';
                    }else{
                        return 'tie';
                    }
                }
                // hàm này cho phép máy thực hiện một nước đi
                function computeMover(){
                    // tìm ô trống để đánh
                    for (var i =0; i < 9; i++){
                        if(board[i] === ''){
                            board[i] = computer;
                            // cập nhật lại bàn cờ
                            render();
                            return;
                        }
                    }
                }
                // hàm này cho phép người chơi thực hiện một nước đi
                function makeMove(idx){
                    if(board[idx] !== ''){
                        return;
                    }
                    // đánh dấu ô đó của người chơi hiện tại 
                    board[idx] = player;
                    var squareId = 'square' + idx; // ID của ô cờ
                    console.log(document.getElementById(squareId))
                      document.getElementById(squareId).style.borderColor = '#00CCFF';
                      document.getElementById(squareId).style.color = '#00CCFF';
                      document.getElementById(squareId).style.backgroundColor = '#000000';
                   
                    
                    // Thay đổi nội dung của ô cờ
                    document.getElementById(squareId).innerText = player;
                    
                  
                    //  vẽ lại bàn cờ
                    render();
                    // kiểm tra xem ai là người chiến thắng hoặc trò chơi đã được hòa
                    var result = winner();
                    if (result !== '') {
                        console.log(result + "1");
                        
                        var message =  document.getElementById("Notification");;
                        if (result === 'tie') {
                            message.style.color='#FFFF';
                            message.innerHTML= 'It is a tie!';
                        } else {
                            message.style. color=result=='X'? '#00CCFF' : '#FF5974';
                            message.innerHTML = result + '  Victory';
                        }
                       
                        // sau khi đã sử thông báo kết quả thì xóa đi sựu kiện click 
                        document.getElementById('ContetnMain2').removeEventListener('click',handleClick);
                    }else{
                        var squareId1 = 'square' + idx; // ID
                                //    Thay đổi màu sắc của ô cờ
                        console.log(document.getElementById(squareId1))
                      document.getElementById(squareId1).style.borderColor = '#FF5974';
                      document.getElementById(squareId1).style.color = '#FF5974';
                      document.getElementById(squareId1).style.backgroundColor = '#000000';
                      document.getElementById(squareId1).innerText = player;
                        // chuyển lượt sang cho máy 
                        player = computer;
                        
                        // gọi hàm để cho máy thực hiện một nước đi
                        computeMover();
                        player = player === "X" ? "O":"X";
                        // kiểm tra xem ai là người thắng
                        var result = winner();
                        
                        if (result !== '') {
                            var message = '';
                            if(result === 'tie') {
                                message = 'It is a tie!';
                            }else{
                                message = result + 'Victory';
                            }
                            document.getElementById('Notification').innerHTML = message;
                            document.getElementById("ContetnMain2").removeEventListener('click',handleClick);
                        }
                    }
                }
                // hàm này được sử dụng để xử lý sự kiện click
                function handleClick(e) {
                    var idx = parseInt(e.target.id.slice(6));
                    makeMove(idx);
                }
                render();
                // Thêm một sự kiện click vào bàn cờ để cho người chơi thực hiện nước đi
                document.getElementById('ContetnMain2').addEventListener('click',handleClick);
                // Thực hiện kiểm tra xem ai là người chơi đầu tiên và xác định nước đi đầu tiên
                if (computer === 'X'){
                    computeMover();
                }
            }else{
                
                ContetnMain1.style.display='block';
                ContetnMain2.style.display='none';
                // Level.style.display='none';
                var arr= ['', '', '', '', '', '','' ,'' ,''];
                var mode = prompt("X or O go first....");
                    if(mode === 'x' || mode === 'X'){
                        mode = "X";
                    }
                    else if(mode === 'o' || mode === 'O'){
                        mode = "O";
                    }else{
                        var mode = alert("Invalid data. Please re-enter");
                        var mode = prompt("X or O go first....");
                    }
                function Mode() {
                
                    mode = mode === 'X' ? 'O' : 'X';
                }
                function TestVictory(){
                    // kiem tra hang ngang giong nhau
                    for(let i=0;i<9;i+=3){
                        if(arr[i] !=='' 
                        && arr[i] == arr[i+1] 
                        && arr[i] == arr[i+2]){
                            return arr[i];
                        }
                    }
                    // kiem tra duong doc
                    for(let i=0; i< 3;i++){
                        if(arr[i] !=="" 
                        && arr[i] == arr[i+3] 
                        && arr[i] == arr[i+6]){
                            return arr[i];
                        }
                    }
                    // kiem tra duong cheo phai
                        if(
                            arr[2] !==''
                            && arr[2] == arr[4]
                            && arr[2] == arr[6]
                            ){
                            return arr[2];
                        }
                    
                    // kiem tra duong cheo trai
                    if(
                        arr[0] !==''
                        && arr[0] == arr[4]
                        && arr[0] == arr[8]
                    ){
                        return arr[0];
                    }
                    if(!arr.includes('')){
                        return 'Draw'
                    }
                    return null;
                }
                // su ly khi lay duo du lieu
                function ResetBoard(){
                     arr=['','','','','','','','',''];
                    for(let i = 0 ; i < 9 ; i++){
                        // lay du lieu
                        var  data= document.getElementById('btn'+i);
                        data.style.backgroundColor='#ffff';
                        data.innerText=" "
                    }
                    mode="X";
                }
                // su ly khi say ra su kien win,lose,thuc hien di chuyen
                function makeMove(square){
                    if(arr[square] === ''){
                        arr[square] =mode;  

                        var data=document.getElementById('btn'+square);
                // gan du lieu cho luot đi nếu dữ liệu là x thì lượt di là x và hiển thị sau khi được sử lý màu
                        data.innerText=mode;
                        if(mode === "O"){
                            data.style.borderColor='#FF5974' ;
                            data.style.color= '#FF5974' ;
                            data.style.backgroundColor ='#000000';
                            
                        }else if(mode === "X"){
                            data.style.borderColor='#00CCFF';
                            data.style.color='#00CCFF';
                            data.style.backgroundColor='#000000';            
                        }else{
                
                            console.log('Eroor in function makeMove');
                        }
                        var Victory=TestVictory();
                        setTimeout(function(){
                            if(Victory !=null){
                                if(Victory === 'Draw'){
                                    var Notification=document.getElementById('Notification');
                                    Notification.style.color='#FFFF';
                                    Notification.innerHTML='It is a tie!';
                                }
                                else{
                                    var Notification1=document.getElementById('Notification');
                                    Notification1.style.color=mode=='X'? '#00CCFF' : '#FF5974';
                                    Notification1.innerHTML=Victory+' Victory';
                
                                }
                                ResetBoard();
                            }else{
                                Mode();
                            }
                        },150)
                    }
                }
                // them su kien khi click vao o
                for(var i=0;i<9;i++){
                    document.getElementById('btn'+i).addEventListener('click',function(){
                        makeMove(parseInt(this.id.slice(3)));
                    })
                }
            }
            
            
        }
    
}
function convert(type){
    if(type==="home"){
        window.location.replace('../index.html');
    }
    else if(type==="SignIn"){
        window.location.replace('../SignIn.html')
    }
    else if(type==="LogIn"){
        alert("You need to login to use the service");
        window.location.replace("../Login.html");
    }
    else if(type==="Im"){
        window.location.replace("../DACN/index.html")
    }else if(type === "LearningScreen" ){
        window.location.replace('../LearningScreen.html');
    }else if(type =="UserScreen"){
        window.location.replace('../UserScreen.html');

    }
    else{
        alert("Eroor...khong co type nao ban muon")
    }
}