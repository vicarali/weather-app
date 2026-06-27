import iconDrizzle from "../../assets/images/icon-drizzle.webp";
import iconFog from "../../assets/images/icon-fog.webp";
import iconCloud from "../../assets/images/icon-overcast.webp";
import iconCloudSun from "../../assets/images/icon-partly-cloudy.webp";
import iconRain from "../../assets/images/icon-rain.webp";
import iconSnow from "../../assets/images/icon-snow.webp";
import iconStorm from "../../assets/images/icon-storm.webp";
import iconSunny from "../../assets/images/icon-sunny.webp";

export const weatherToImgMap: Record<number, string> = {
	// 00–03: Sky conditions
	0: iconSunny, // Clear sky
	1: iconCloudSun, // Clouds dissolving
	2: iconCloudSun, // Sky unchanged (partial cloud)
	3: iconCloud, // Clouds forming / overcast

	// 04–09: Visibility-reducing phenomena
	4: iconFog, // Smoke haze
	5: iconFog, // Haze
	6: iconFog, // Dust in suspension
	7: iconFog, // Dust/sand raised by wind
	8: iconFog, // Dust/sand whirls
	9: iconStorm, // Duststorm / sandstorm in sight

	// 10–13: Mist, shallow fog, lightning (as in your initial state)
	10: iconFog, // Mist
	11: iconFog, // Shallow fog, patches
	12: iconFog, // Shallow fog, continuous
	13: iconStorm, // Lightning visible, no thunder

	// 14–19: Precipitation in sight / other phenomena
	14: iconRain, // Precipitation not reaching ground
	15: iconRain, // Precipitation reaching ground, distant
	16: iconRain, // Precipitation near station
	17: iconStorm, // Thunderstorm, no precipitation
	18: iconStorm, // Squalls
	19: iconStorm, // Funnel cloud / tornado / waterspout

	// 20–29: Recent precipitation (not at time of obs)
	20: iconDrizzle, // Recent drizzle or snow grains
	21: iconRain, // Recent rain
	22: iconSnow, // Recent snow
	23: iconRain, // Recent rain and snow / ice pellets
	24: iconDrizzle, // Recent freezing drizzle or rain
	25: iconRain, // Recent rain showers
	26: iconSnow, // Recent snow showers
	27: iconStorm, // Recent hail showers
	28: iconFog, // Recent fog or ice fog
	29: iconStorm, // Recent thunderstorm

	// 30–35: Duststorm / sandstorm
	30: iconStorm, // Slight/moderate duststorm, decreasing
	31: iconStorm, // Slight/moderate duststorm, no change
	32: iconStorm, // Slight/moderate duststorm, increasing
	33: iconStorm, // Severe duststorm, decreasing
	34: iconStorm, // Severe duststorm, no change
	35: iconStorm, // Severe duststorm, increasing

	// 36–39: Blowing / drifting snow
	36: iconSnow, // Slight/moderate blowing snow, low
	37: iconSnow, // Heavy drifting snow
	38: iconSnow, // Slight/moderate blowing snow, high
	39: iconSnow, // Heavy blowing snow

	// 40–49: Fog or ice fog at time of observation
	40: iconFog, // Fog at a distance
	41: iconFog, // Fog in patches
	42: iconFog, // Fog, sky visible, thinning
	43: iconFog, // Fog, sky invisible, thinning
	44: iconFog, // Fog, sky visible, no change
	45: iconFog, // Fog, sky invisible, no change
	46: iconFog, // Fog, sky visible, thickening
	47: iconFog, // Fog, sky invisible, thickening
	48: iconFog, // Fog depositing rime, sky visible
	49: iconFog, // Fog depositing rime, sky invisible

	// 50–55: Drizzle (not freezing)
	50: iconDrizzle, // Intermittent drizzle, slight
	51: iconDrizzle, // Continuous drizzle, slight
	52: iconDrizzle, // Intermittent drizzle, moderate
	53: iconDrizzle, // Continuous drizzle, moderate
	54: iconDrizzle, // Intermittent drizzle, heavy
	55: iconDrizzle, // Continuous drizzle, heavy

	// 56–59: Freezing drizzle / drizzle + rain
	56: iconDrizzle, // Freezing drizzle, slight
	57: iconDrizzle, // Freezing drizzle, moderate/heavy
	58: iconDrizzle, // Drizzle and rain, slight
	59: iconDrizzle, // Drizzle and rain, moderate/heavy

	// 60–65: Rain (not freezing)
	60: iconRain, // Intermittent rain, slight
	61: iconRain, // Continuous rain, slight
	62: iconRain, // Intermittent rain, moderate
	63: iconRain, // Continuous rain, moderate
	64: iconRain, // Intermittent rain, heavy
	65: iconRain, // Continuous rain, heavy

	// 66–69: Freezing rain / rain+snow
	66: iconRain, // Freezing rain, slight
	67: iconRain, // Freezing rain, moderate/heavy
	68: iconSnow, // Rain or drizzle and snow, slight
	69: iconSnow, // Rain or drizzle and snow, moderate/heavy

	// 70–79: Solid precipitation (not showers)
	70: iconSnow, // Intermittent snowfall, slight
	71: iconSnow, // Continuous snowfall, slight
	72: iconSnow, // Intermittent snowfall, moderate
	73: iconSnow, // Continuous snowfall, moderate
	74: iconSnow, // Intermittent snowfall, heavy
	75: iconSnow, // Continuous snowfall, heavy
	76: iconSnow, // Diamond dust
	77: iconSnow, // Snow grains
	78: iconSnow, // Isolated star-like snow crystals
	79: iconSnow, // Ice pellets

	// 80–86: Rain / snow showers
	80: iconRain, // Rain showers, slight
	81: iconRain, // Rain showers, moderate/heavy
	82: iconRain, // Rain showers, violent
	83: iconSnow, // Rain and snow mixed showers, slight
	84: iconSnow, // Rain and snow mixed showers, moderate/heavy
	85: iconSnow, // Snow showers, slight
	86: iconSnow, // Snow showers, moderate/heavy

	// 87–90: Hail / snow pellet showers
	87: iconSnow, // Snow pellet / small hail showers, slight
	88: iconSnow, // Snow pellet / small hail showers, moderate/heavy
	89: iconStorm, // Hail showers, slight
	90: iconStorm, // Hail showers, moderate/heavy

	// 91–94: Recent thunderstorm + current precipitation
	91: iconRain, // Slight rain; recent thunderstorm
	92: iconRain, // Moderate/heavy rain; recent thunderstorm
	93: iconSnow, // Slight snow/mixed/hail; recent thunderstorm
	94: iconSnow, // Moderate/heavy snow/mixed/hail; recent thunderstorm

	// 95–99: Thunderstorm at time of observation
	95: iconStorm, // Thunderstorm slight/moderate, rain/snow
	96: iconStorm, // Thunderstorm slight/moderate, with hail
	97: iconStorm, // Thunderstorm heavy, rain/snow
	98: iconStorm, // Thunderstorm + duststorm
	99: iconStorm // Thunderstorm heavy, with hail
};
