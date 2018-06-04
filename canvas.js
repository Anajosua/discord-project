var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
jnfmdsklfd

	
// var x = 200;
// function animate() {
// 		requestAnimationFrame(animate);

// 		c.beginPath();
// 		c.arc(x,200,30,0, Math.PI * 2, false);
// 		c.strokeStyle = "blue";
// 		c.stroke();
// 		x += 1

// 	}	
// 	animate()
// var left = 0;
// var y = 50;
// var anim = function () {
// 	y -= 1;
// 	c.fillRect(50,y,100,100)
// 	console.log(y)
// 	if(y <= -100){
// 		clearInterval(int)
// 	}
// }

// var int = setInterval(anim,100);


var points = [10, 30, 50, 15];
// object

function Stick (x,y) {
	this.x = x;
	this.y = y;
	
	this.anim = (x,point)=>{
		if(y >= point){
			console.log("poin:" + point)
			requestAnimationFrame(this.anim(x,point));
			c.fillStyle = "blue";
			c.fillRect(x,y,100,10);
			console.log(y)
			y -= 10 ;  
		}else{
			console.log("hit")
		}
	}
}
var j = new Stick(150,340)
j.anim(150,10)

// var h = new Stick(100,350)
var arr = [];
// var s1 = new Stick();
// var arr = [10,30,50,100];


// function generator(x) {
	 
// 	for (var i = 0; i < points.length; i++) {
// 		x += 130
// 		point = points[i]; 
// 		arr[i] = new Stick(100,350)
// 		arr[i].anim(x,point)
// 		// console.log(point)
// 	};
// }

// generator(50)
// // generator(5,50,0)

// function animate () {
// 	requestAnimationFrame(animate);

// 	for (var i = 0; i < nb; i++) {
// 		x += 130
// 		y = arr[i]; 
// 		s1.draw(x,y)
// 	};

// }

// animate()
