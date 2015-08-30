window.onload=function(){

	var a = document.getElementById("a");
		//var href = a.getAttribute("href");

	a.onclick=function(){
		// 这是一个笨办法啊！
		setTimeout(test,300);
		// test();
	}
function test(){
		if (a.getAttribute("href") == "#hello") {
			a.setAttribute("href","#about");
			return false;
		}else if (a.getAttribute("href") == "#about") {
			a.setAttribute("href","#skill");
			return false;
		}else if (a.getAttribute("href") == "#skill") {
			a.setAttribute("href","#project");
			return false;
		}else if (a.getAttribute("href") == "#project") {
			a.setAttribute("href","#desc");
			return false;
		}else if(a.getAttribute("href") == "#desc") {
			a.setAttribute("href","#contact");
			return false;
		}else{
			a.setAttribute("href","#hello");
		};

	};

}


