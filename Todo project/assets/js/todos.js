//Check off specific todos
$("ul").on("click","li", function(){
	$(this).toggleClass('completed');
});

//to delete todo
//using parent() to retrieve li associated with span
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();//stop event bubbling
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + text + " </li>");
	} 
});

$("#toggleform").on("click",function(){
	$("input[thype='text']").fadeToggle();
});