console.log('Client-side code running');

const button = document.getElementById('loadData');
button.addEventListener('click', function(e) {
	$(".spinner-border").show();
	$.getJSON('./getData',
			function (json) {
			    var tr=[];
			    if(json.count > 0){
			    	var site = json.sites;
				    for (var i = 0; i < site.length; i++) {
				        tr.push('<tr>');
				        tr.push("<td>" + site[i].id + "</td>");
				        tr.push("<td>" + site[i].name + "</td>");
				        tr.push("<td>" + site[i].url + "</td>");
				        tr.push('</tr>');
				    }
				    $(".spinner-border").hide();
				    $('#table_data').append($(tr.join('')));

			    }
			    $(".spinner-border").hide();
			    
			});
});