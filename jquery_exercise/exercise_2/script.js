$(function() {

	function clear()
	{
		$(".image_placeholder_1").html("");
		$(".image_placeholder_2").html("");
		$(".image_placeholder_3").html("");
		$(".image_placeholder_4").html("");
	}

	$("#show_all").click(function()
	{
		clear();
		$(".image_placeholder_1").append(
				$("<img/>").attr("src", "./animal.jpeg")
			);
		$(".image_placeholder_2").append(
			$("<img/>").attr("src", "./fruit.jpeg")
		);
		$(".image_placeholder_3").append(
			$("<img/>").attr("src", "./car.jpeg")
		);
		$(".image_placeholder_4").append(
			$("<img/>").attr("src", "./bike.jpg")
		);
	});

	$("#show_animal").click(function(){
		clear();
		$(".image_placeholder_1").append(
			$("<img/>").attr("src", "./animal.jpeg")
		);
	});

	$("#show_fruit").click(function(){
		clear();
		$(".image_placeholder_1").append(
			$("<img/>").attr("src", "./fruit.jpeg")
		);
	});

	$("#show_bike").click(function(){
		clear();
		$(".image_placeholder_1").append(
			$("<img/>").attr("src", "./bike.jpg")
		);
	});

	$("#show_car").click(function(){
		clear();
		$(".image_placeholder_1").append(
			$("<img/>").attr("src", "./car.jpeg")
		);
	});
});
