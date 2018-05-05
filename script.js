/* initialize calculation variables */
var day;
var tier1Rides;
var tier2Rides;
var tier3Rides;

/* averages */
var average = {
	gasPrice: 2.68, //$
	milesPerRide: 5, //miles
	mpg: 28, //sonata
	gasTank: 13 //gallons
};

/* calculate costs; display results */
function displayResult() {
	var driverTotal = $("#totalRides").val(); //drivers ride totals
	var dayOfWeek = $("#dayOfWeek").val(); //date of pickup

	switch (dayOfWeek) {
		case "Monday":
			day = 7;
			tier1Rides = 125;
			tier2Rides = 105;
			tier3Rides = 85;
			break;
		case "Tuesday":
			day = 6;
			tier1Rides = 108;
			tier2Rides = 90;
			tier3Rides = 73;
			break;
		case "Wednesday":
			day = 5;
			tier1Rides = 90;
			tier2Rides = 75;
			tier3Rides = 61;
			break;
		case "Thursday":
			day = 4;
			tier1Rides = 72;
			tier2Rides = 60;
			tier3Rides = 49;
			break;
		case "Friday":
			day = 3;
			tier1Rides = 54;
			tier2Rides = 45;
			tier3Rides = 37;
			break;
		case "Saturday":
			day = 2;
			tier1Rides = 36;
			tier2Rides = 30;
			tier3Rides = 25;
			break;
		case "Sunday":
			day = 1;
			tier1Rides = 125;
			tier2Rides = 105;
			tier3Rides = 85;
			break;
		default:
			console.log("No date selected.");
	}

	/* GAS PRICE FOR RIDES COMPLETED */
	function ridesCompleted() {
		var gallonsInTank = driverTotal * average.milesPerRide;
		var gasPricePerDay = gallonsInTank / 364;
		var bar = gasPricePerDay * average.gasTank;
		var result = Math.round(bar * average.gasPrice);
		if (result <= 0) {
			return "<h5><i>You haven't done any rides!</i></h5>";
		} else {
			return (
				"<i>Lyft Learning:</i> Based on Chicago’s average fuel prices and the " +
				driverTotal +
				" rides you've completed so far this week, you’ve spent around  $" +
				result +
				" in gas."
			);
		}
	}

	/* display currently spent costs to page */ document.getElementById(
		"ridesCompleted"
	).innerHTML = ridesCompleted();

	/* GAS PRICE FOR RENTAL TIER GOALS */ document.getElementById(
		"tierHeading"
	).innerHTML =
		"What You Should Save:";

	/* Tier 1 Result */
	// function tier1Result() {
	// 	var ridesNeeded = tier1Rides - driverTotal;
	// 	var ridesPerGallon = average.milesPerRide / average.milesPerGallon;
	// 	var gallonsNeeded = ridesNeeded / ridesPerGallon;
	// 	var result = Math.round(average.gasPrice * gallonsNeeded);

		var gallonsInTank =
			(tier1Rides - driverTotal) * average.milesPerRide;
		var gasPricePerDay = gallonsInTank / 364;
		var bar = gasPricePerDay * 13;
		var result = Math.round(bar * average.gasPrice);
		
		if (result <= 0) {
			return "<i>Congratulations on completing your <b>$165 Rental Reward</b> goal!!</i>";
		} else {
			return (
				"To reach your <b>$165 Rental Reward</b>, you should save an additional $" +
				result +
				"."
			);
		}
	}
	document.getElementById("result1").innerHTML = tier1Result();

	function tier2Result() {
		var gallonsInTank =
			(tier2Rides - driverTotal) * average.milesPerRide;
		var gasPricePerDay = gallonsInTank / 364;
		var bar = gasPricePerDay * 13;
		var result = Math.round(bar * average.gasPrice);
		if (result <= 0) {
			return "<i>Congratulations on completing your <b>$100 Rental Reward</b> goal!!</i>";
		} else {
			return (
				"To reach your <b>$100 Rental Reward</b>, you should save an additional $" +
				result +
				"."
			);
		}
	}
	document.getElementById("result2").innerHTML = tier2Result();

	function tier3Result() {
		var gallonsInTank =
			(tier3Rides - driverTotal) * average.milesPerRide /*average miles per ride*/;
		var gasPricePerDay = gallonsInTank / 364 /*miles for full tank*/;
		var bar = gasPricePerDay * 13 /*gallons in full tank*/;
		var result = Math.round(bar * average.gasPrice);
		if (result <= 0) {
			return "<i>Congratulations on completing your <b>$65 Rental Reward</b> goal!!</i>";
		} else {
			return (
				"To reach your <b>$65 Rental Reward</b>, you should save an additional $" +
				result +
				"."
			);
		}
	}
	document.getElementById("result3").innerHTML = tier3Result();

/* Animate result */
$(".calculate").click(function() {
	$("form").animate(
		{
			height: "toggle",
			opacity: "toggle"
		},
		"slow"
	);
	return false;
});