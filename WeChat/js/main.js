var chatCon='';
var chatTit='';
for (var i = 0; i < 3; i++) {
	chatTit+='<li><center><span>'+chatTitData[i]+'</span></center></li>';
}
chatCon+='<li class="rightWrapper"><div class="rightUser"></div><p class="rightMes">'+members[0].content[0]+'</p></li>';
chatCon+='<li class="rightWrapper"><div class="rightUser"></div><p class="rightGif">'+members[0].content[6]+'</p></li>';

for (var i = 1; i < 6; i++) {
	chatCon+='<li class="leftWrapper"><div class="leftUser"></div><p class="leftMes">'+members[i].content[0]+'</p></li>';
}

chatCon+='<li class="rightWrapper"><div class="rightUser"></div><p class="rightMes">'+members[0].content[1]+'</p></li> ';
for (var i = 6; i < 12; i++) {
	chatCon+='<li class="leftWrapper"><div class="leftUser"></div><p class="leftMes">'+members[i].content[0]+'</p></li>';
}

chatCon+='<li class="rightWrapper"><div class="rightUser"></div><p class="rightMes">'+members[0].content[2]+'</p></li> ';

for (var i = 12; i < 17; i++) {
	chatCon+='<li class="leftWrapper"><div class="leftUser"></div><p class="leftMes">'+members[i].content[0]+'</p></li>';
}

chatCon+='<li class="rightWrapper"><div class="rightUser"></div><p class="rightMes">'+members[0].content[3]+'</p></li>';

for (var i = 17; i < 22; i++) {
	chatCon+='<li class="leftWrapper"><div class="leftUser"></div><p class="leftMes">'+members[i].content[0]+'</p></li>';
}

chatCon+='<li class="rightWrapper"><div class="rightUser"></div><p class="rightMes">'+members[0].content[4]+'</p></li>';

chatCon+='<li class="rightWrapper"><div class="rightUser"></div><p class="rightGif">'+members[0].content[7]+'</p></li>';

for (var i = 22; i < 27; i++) {
	chatCon+='<li class="leftWrapper"><div class="leftUser"></div><p class="leftMes">'+members[i].content[0]+'</p></li>';
}

chatCon+='<li class="rightWrapper"><div class="rightUser"></div><p class="rightMes">'+members[0].content[5]+'</p></li>';

chatCon+='<li class="rightWrapper"><div class="rightUser"></div><div class="rightLink"><img src="img/link.jpg" style="CURSOR: hand"><s></s></div></li>';


$('#chatList').html(chatTit+chatCon);

for (var i = 0; i < members.length-1; i++) {
	$('.leftWrapper .leftUser').eq(i).css('background-image','url(img/'+(i+2)+'.jpg)');
}
$('#chatList li').hide();
var num=0;
var scrollTopVal=0;
var timer=null;
var onOff=true;
timer = setInterval(moveInfor,2000);
function moveInfor() {//每条信息从下往上滚动时的动画
	$('#chatList li').eq(num).show();
	num++;
	if (onOff&&num>=3) {
		scrollTopVal=$(document).height()-$(document.body).height();
		$('html,body').animate({scrollTop:scrollTopVal}, 800);
	}
	if (num==38) {
		clearInterval(timer);
		$('.clickAll').hide();
	}
}

$('.clickAll').on('touchend',function () {
	clearInterval(timer);
	$('#chatList li').show();
	scrollTopVal=$(document).height()-$(document.body).height();
	$('html,body').animate({scrollTop:scrollTopVal}, 1000);
	$('.clickAll').hide();
	onOff=false;
})

$(document).on('touchmove',function(e){//手指按下时，定时器停止，手指可以往上翻看信息
	clearInterval(timer);
	setTimeout(function (){
		clearInterval(timer);
		timer = setInterval(moveInfor,2000);
		if (num==38) {
			clearInterval(timer);
		}
	},200)
});
$('.rightLink img').on('touchend',function () {
	window.open("http://www.cac.gov.cn/dfwxb2017/index.htm");
})
for (var i = 0; i < membersName.length; i++) {
	$('.leftUser').eq(i).attr('data-content', membersName[i].name);
}
