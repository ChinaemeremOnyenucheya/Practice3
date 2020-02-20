
$("#first").on ("click",function(){
			$("#input").slideToggle();});

$("#input").on("keypress",function(event){
	if (event.which === 13){
	 var bookDetail = $(this).val();
	 $(this).val("");
	 $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" +bookDetail+ "</li>");}
	});


$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){$(this).remove();});
	event.stopPropagation();});


$("#second").on("click",function(){ $("#container").slideToggle();});