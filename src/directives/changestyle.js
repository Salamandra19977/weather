export default {
	bind(el,binding) {
		if (binding.modifiers.temp == true) {
			setColorTemp(el, binding) 
		}
		if (binding.modifiers.wind == true) {
			setColorWind(el, binding) 
		}
	},
	update(el,binding) {
		if (binding.modifiers.temp == true) {
			setColorTemp(el, binding) 
		}
		if (binding.modifiers.wind == true) {
			setColorWind(el, binding) 
		}
	}
}
function setColorTemp(el,binding){
	if (binding.value <= 0 ){
		el.style.color = "blue";
	}
	else{
		el.style.color = "red";
	}		
}
function setColorWind(el,binding){
	if (binding.value >= 0 && binding.value <= 10  ){
		el.style.color = "green";
	}
	else{
		el.style.color = "red";
	}		
}