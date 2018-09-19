var btn = document.getElementById('circle');		//按鈕
var anima = document.getElementById('anima');		//彈出內容	
var anima2 = document.getElementsByClassName('anima2')[0];		//控制內容關閉
var aBt = document.getElementsByTagName('input');   //footer選項
var but = document.getElementById("clo").getElementsByClassName("text")[1];		//關閉按鈕


for(var i=0; i<aBt.length; i++){
	aBt[i].onclick = function(){
			anima.style.display = 'none';
	}
}

//開啟彈出動畫
btn.onclick = function(){
	anima.style.display = 'block';
	anima.style.animation = 'animations6 2.5s ease-in-out forwards';
}

//關閉彈出動畫
but.onclick = function(){
	// anima2.style.animation = 'css5 linear 2s forwards';
		anima2.style.animation = 'animations4 linear 2s forwards';
	// anima2.style.animation = 'animations5 linear 2s forwards';
	  function dis(){
   	setTimeout(function(){
			anima.style.display = 'none';		
  	},1500)
  }
	dis();
}