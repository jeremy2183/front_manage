var btn = document.getElementById('circle');		//按鈕
var anima = document.getElementById('anima');		//彈出內容	
var anima2 = document.getElementsByClassName('anima2')[0];		//控制內容關閉
var aBt = document.getElementsByTagName('input');   //footer選項
var but = document.getElementById("clo").getElementsByClassName("text")[1];		//關閉按鈕
var cont = document.getElementsByClassName('content')[0]; 
var cont1 = document.getElementsByClassName('content-1')[0]; 

var time = document.getElementById("date_box").getElementsByClassName("time")[0];
var dbox = document.getElementById('date_box');   //修改時間盒
var ajax_btn = document.getElementById('ajax_btn');  //修改鈕
var can_btn = document.getElementById('can_btn');		// 取消鈕
var form = document.getElementById('form');  //修改時間表單

for(var i=0; i<aBt.length; i++){
	aBt[i].onclick = function(){
			// anima.style.display = 'none';
	}
}

function play() {  //加入class blur 
  document.querySelector(".content-1").className = "content-1",
  document.querySelector(".content-2").className = "content-2",
  document.querySelector(".content-3").className = "content-3",
  document.querySelector(".content-4").className = "content-4";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".content-1").className = "content-1 blur",
      document.querySelector(".content-2").className = "content-2 blur",
      document.querySelector(".content-3").className = "content-3 blur",
      document.querySelector(".content-4").className = "content-4 blur";

    });
  });

}
// document.querySelector("#circle").addEventListener("click", play, false);


function remove(){  //移除class blur
	// var element = document.getElementsByClassName("blur")[0];
	// element.classList.remove("blur");
	document.querySelector(".content-1").className = "content-1",
  document.querySelector(".content-2").className = "content-2",
  document.querySelector(".content-3").className = "content-3",
  document.querySelector(".content-4").className = "content-4";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".content-1").className = "content-1",
      document.querySelector(".content-2").className = "content-2",
      document.querySelector(".content-3").className = "content-3",
      document.querySelector(".content-4").className = "content-4";
    });
  });
	
}

//開啟彈出動畫
btn.onclick = function(){
	play();  //添加濾鏡
	anima.style.display = 'block';
	anima.style.animation = 'animations8 1.5s ease-in-out forwards';
}

//關閉彈出動畫
but.onclick = function(){
	// anima2.style.animation = 'css5 linear 2s forwards';
	// anima2.style.animation = 'animations4 linear 2s forwards';
	anima2.style.animation = 'animations5 linear 1.5s forwards';
		
		remove();  //移除濾境
	  function dis(){
   	setTimeout(function(){
			anima.style.display = 'none';		
  	},1500)
  }
	dis();
}

// open修改時間盒
dbox.onclick = function(){   
	form.style.display = 'block';
}

//修改確認
ajax_btn.onclick = function(){
	var hour = document.getElementById('hour').value;
	var min = document.getElementById('min').value;
	var sec = document.getElementById('sec').value;
	var times = hour + ":" + min + ":" + sec;

	if(sec > 59 || min > 59 || hour > 23 || sec == "" || min =="" || hour ==""){
			alert("請輸入正確格式");
			hour="";
			min="";
			sec="";
			return;
	}
	
	alert("修改成功");
	time.innerHTML = times; 	
}

//取消修改
can_btn.onclick = function(){   
	form.style.display = 'none';
}

// 判斷是否數字
function checkNum(){   
	if(event.keyCode < 48 || event.keyCode > 57){
			event.returnValue = false;   
			window.alert("請輸入數字");
	}
}	
