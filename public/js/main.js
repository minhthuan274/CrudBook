function deleteRow(id){
		console.log("begin ajax");
		$.ajax({
			url: '/delete/' + id,
			type: 'delete',
		});
		console.log("done ajax");
		$("#item"+id).remove();
	}

function deleteReview(id){
	console.log("delete review");
	$.ajax({
		url: '/review/delete/' + id,
		type: 'delete'
	});

	$("#review" + id).remove();
}