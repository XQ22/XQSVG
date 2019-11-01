// XQ22's SVG Manipulation Packet
// Documented in the Readme

function XQSVGElement(id,t,l){
	this.id = id;
	this.typ = t;
	this.pList = l;
	this.piece = "";
};

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
			c = "<polygon points=\""+t[0]+"\" style=\""+t[1]+"\" />";
			break;
			// TODO: Add more cases
		}
		return c;
	};
	this.addElement = function(id,t,pList){
		let tempEl = XQSVGElement(id,t,pList);
		tempEl.piece = makeElement(t,pList);
		els.push(tempEl);
	};
	this.editElement = function(id,t,pList){
		let index = 0;
		for(let i = 0;i<els.length;i++){
			if(els[i].id===id){
				index = i;
				break;
			}
		}
		let tempEl = XQSVGElement(id,t,pList);
		tempEl.piece = makeElement(t,pList);
		els[index] = tempEl;
	};
	this.logElements = function(){
		console.log(els);
	};
};
