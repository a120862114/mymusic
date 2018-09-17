onload=function(){
	  var imgs=document.getElementsByTagName("img");

	  for(var i=0;i<imgs.length;i++){
		  var img=imgs[i];
		  img.style.left=i*1100+"px";
	  }
  }
  var timeId;
  beginfn();
  //var timeId=setInterval(move,2000);
  function stopfn(){
	  clearInterval(timeId);
  }
  function beginfn(){
	  clearInterval(timeId);
     timeId=setInterval(move,6000);
     }
  onblur=function(){
	  stopfn();
  }
  onfocus=function(){
	  beginfn();
  }
 function move(){
	 
		 var moveId=setInterval(function(){
		  var imgs=document.getElementsByTagName("img");
		  for(var i=0;i<imgs.length;i++){
			 var img=imgs[i];
			 var oldLeft=parseInt(img.style.left);
			 oldLeft-=6;
			 if(oldLeft<=-1100){
				 oldLeft=(imgs.length-1)*1100;
				 clearInterval(moveId);
			 }
			 img.style.left=oldLeft+"px";}
	  },10);
 } 