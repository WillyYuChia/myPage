// willy.js

function get(id) {
	return document.getElementById(id);
}

function getClass(classname) {
	return document.getElementsByClassName(classname);
}

function create(type) {
	return document.createElement(type);
}

function createId(tyoe, id) {
	var ele = create(type);
	ele.id = id;
	return ele;
}