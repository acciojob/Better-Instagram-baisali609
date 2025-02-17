//your code here
document.addEventListener("DOMContentLoaded", ()=>{
	const images = document.querySelectorAll(".image");
	let dragElement;

	images.forEach((image)=>{
		image.addEventListener("dragstart", (e)=>{
			dragElement = e.target;
			e.dataTransfer.setData("text/plain", "");
		});
		image.addEventListener("dragover",(e)=>{
			e.preventDefault();
		});
		image.addEventListener("drop", (e)=>{
			e.preventDefault();
			if(dragElement !== e.target){
				let temp =dragElement.innerHTML;
				dragElement.innerHTML = e.target.innerHTML;
				e.target.innerHTML = temp;
			}
		});
	});
});