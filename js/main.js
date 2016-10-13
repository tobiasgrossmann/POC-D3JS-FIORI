console.log("main");

function initTicker() {
	var TICKER_SPEED = 10000;
	var tickerElement = document.getElementById('ticker');
	var tickerElementWidth = tickerElement.clientWidth;
	var tickerWrapper = tickerElement.querySelector('.ticker-wrapper');
	var tickerUnits = tickerElement.querySelectorAll('.ticker-unit');

	placeTickerUnits();

	var tickerTimeout = window.setTimeout(showNextTickerUnit, TICKER_SPEED);

	function placeTickerUnits() {
		
		for (var i = 0; i < tickerUnits.length; i++) {
			tickerUnits[i].style.left = tickerElementWidth * i + 'px';
		}
	}

	function showNextTickerUnit() {
		Velocity(tickerWrapper, {
			left: tickerWrapper.offsetLeft - tickerElementWidth
		},
		{
			duration: 600,
			easing: 'easeInOutExpo',
			complete: function() {
				if (tickerWrapper.offsetLeft <= (tickerElementWidth * (tickerUnits.length - 1)) * -1) {
					tickerWrapper.style.left = 0 + 'px';
				}
				tickerTimeout = window.setTimeout(showNextTickerUnit, TICKER_SPEED);
			}
		});
	}
}

function initFoulTooltip() {
	var foulBar = document.getElementById('foul');
	var foulTooltip = document.getElementById('foul-tooltip');
	
	if (foulBar) {
		foulBar.addEventListener('click', function(e) {
			if (foulTooltip.style.display === 'block') {
				foulTooltip.style.display = 'none';
			} else {
				foulTooltip.style.display = 'block';
			}
		});
	}
}

/**
 * Kick off main.
 */
document.addEventListener('DOMContentLoaded', function(){
  	// initTicker();
  	initFoulTooltip();
});