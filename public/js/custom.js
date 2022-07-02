$(function(){ 
	var opts = {
		lines: 13 // The number of lines to draw
		, length: 27 // The length of each line
		, width: 30 // The line thickness
		, radius: 42 // The radius of the inner circle
		, scale: 1 // Scales overall size of the spinner
		, corners: 1 // Corner roundness (0..1)
		, color: '#000' // #rgb or #rrggbb or array of colors
		, opacity: 0.25 // Opacity of the lines
		, rotate: 0 // The rotation offset
		, direction: 1 // 1: clockwise, -1: counterclockwise
		, speed: 1 // Rounds per second
		, trail: 60 // Afterglow percentage
		, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
		, zIndex: 2e9 // The z-index (defaults to 2000000000)
		, className: 'spinner' // The CSS class to assign to the spinner
		, top: '50%' // Top position relative to parent
		, left: '50%' // Left position relative to parent
		, shadow: false // Whether to render a shadow
		, hwaccel: false // Whether to use hardware acceleration
		, position: 'absolute' // Element positioning
	}


	$('#search').keyup(function(){
		var search_term = $(this).val();

		$.ajax({
			method: 'POST',
			url: '/api/search',
			data: {
				search_term
			},
			dataType: 'json',
			success: function(json){
				var data = json.hits.hits.map(function(hit){
					return hit;
				});

				$('#searchResults').empty();
				for (var i = 0; i < data.length; i++){
					var html = "";
					html += '<div class="col-md-4">';
					html += '<a href="/product/' +  data[i]._id  + '">'
					html += '<dir class="thumbnail">';
					html += '<img style="width: 227px; height: 227px;" src="' +  data[i]._source.image  + '">';
					html += '<div class="caption">';
					html += '<h3>' +  data[i]._source.name  + '</h3>';
					html += '<p>$' +  data[i]._source.price  + '</p>';
					html += '</div>';
					html += '</dir>';
					html += '</a>';
					html += '</dir>';

					$('#searchResults').append(html);
				}
				console.log(data);
			},

			error: function(error){
				console.log(err);
			}
		});
	});




	$(document).on('click', '#plus', function(e) {
		e.preventDefault();
		var priceValue = parseFloat($('#priceValue').val());
		var quantity = parseFloat($('#quantity').val());
		
		quantity +=1
		$('#quantity').val(quantity);
		$('#priceValue').val(priceValue.toFixed(2) + " RON");
		$('#total').html(quantity);
	});


	$(document).on('click', '#minus', function(e) {
		e.preventDefault();
		var priceValue = parseFloat($('#priceValue').val());
		var quantity = parseFloat($('#quantity').val());

		if (quantity == 1) {
			quantity = 1;
		} else {
			quantity -=1
		}
		$('#quantity').val(quantity);
		$('#priceValue').val(priceValue.toFixed(2) + " RON");
		$('#total').html(quantity);
	});


});

function toggleMenu(x) {
  x.classList.toggle("change");
  var element = document.getElementById("mobile-navbar");
  if(element.style.display == "block") {
	  element.style.display = "none";
  } else {
	  element.style.display = "block";
  }
}

document.getElementById("logo").onclick = function () {
	location.href = "/";
};

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

if(document.querySelector('.close')){
	document.querySelector('.close').onclick = function () {
		var elementToClose = document.querySelector(".alert");
		elementToClose.style.display = "none";
	};
}

function signupNext() {
	var form1 = document.getElementById("form1");
	var form2 = document.getElementById("form2");
	form1.style.display = "none";
	form2.style.display = "block";
};

var signupSteps = 1;
function orderNext() {
	var form1 = document.getElementById("orderForm1");
	var form2 = document.getElementById("orderForm2");
	var form3 = document.getElementById("orderForm3");
	signupSteps = signupSteps + 1;
	if(signupSteps == 1){
		form1.style.display = "block";
		form2.style.display = "none";
		form3.style.display = "none";
	}
	if(signupSteps == 2){
		form1.style.display = "none";
		form2.style.display = "block";
		form3.style.display = "none";
	}
	if(signupSteps == 3){
		form1.style.display = "none";
		form2.style.display = "none";
		form3.style.display = "block";
	}
	if(signupSteps == 4){
		form1.style.display = "block";
		form2.style.display = "none";
		form3.style.display = "none";
		signupSteps = 1;
	}
};

// (function() {
    // Add event listener
    // document.addEventListener("mousemove", parallax);
    // const elem = document.querySelector("#parallax");
    // Magic happens here
    // function parallax(e) {
        // let _w = window.innerWidth/2;
        // let _h = window.innerHeight/2;
        // let _mouseX = e.clientX;
        // let _mouseY = e.clientY;
        // let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        // let _depth2 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.005}%`;
        // let _depth3 = `${50 - (_mouseX - _w) * 0.0005}% ${50 - (_mouseY - _h) * 0.0005}%`;
        // let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        // console.log(x);
        // elem.style.backgroundPosition = x;
    // }

// })();







