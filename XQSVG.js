// XQ22's SVG Manipulation Packet
// Documented in the Readme

function XQSVG(w,h){
	var els = [];
	this.output = function(){return "<svg width=\""+w+"\" height=\""+h+"\">"+els.join()+"<svg>";};
	var makeElement = function(typ,t){
		let c = "";
		switch(typ){
			case "rect":
			c = "<rect x=\""+t[0]+"\" y=\""+t[1]+"\" width=\""+t[2]+"\" height=\""+t[3]+"\" style=\""+t[4]+"\" />";
			break;
			case "circle":
			c = "<circle cx=\""+t[0]+"\" cy=\""+t[1]+"\" r=\""+t[2]+"\" style=\""+t[3]+"\" />";
			break;
			case "ellipse":
			c = "<ellipse cx=\""+t[0]+"\" cy=\""+t[1]+"\" rx=\""+t[2]+"\" ry=\""+t[3]+"\" style=\""+t[4]+"\" />";
			break;
			case "polygon":
			c = "<polygon points=\""+t[0]+"\" style=\""+t[1]+"\" "
			break;
		}
		return c;
	};
	this.addElement = function(t,pList){
		els.push(makeElement(t,pList));
	};
	this.editElement = function(n,t,pList){
		els[n] = makeElement(t,pList);
	};
	this.logElements = function(){
		console.log(els);
	};
};