
/*
Using US metrics. 
- Average miles per gallon: https://www.reuters.com/article/us-autos-emissions/u-s-vehicle-fuel-economy-rises-to-record-24-7-mpg-epa-idUSKBN1F02BX
- Average gas tank size: https://en.wikipedia.org/wiki/Fuel_tank
- Average gas costs: https://gasprices.aaa.com/
- Average rideshare trip ride: https://ride.guru/lounge/p/what-is-the-average-trip-distance-for-an-uber-or-lyft-ride
*/

const average = {
	mpg: 24.7, 
	gasTank: 15,
	gasPrice: 2.814, 
	trip: 6
};

/* calculate costs; display results */
function displayResult() {
	
	let rideCount = getElementById("rideCount");
	
	
	var driverTotal = $("#totalRides").val(); //drivers ride totals
	var dayOfWeek = $("#dayOfWeek").val(); //date of pickup

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