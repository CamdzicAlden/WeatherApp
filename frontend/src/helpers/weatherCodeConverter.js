//Mapping api weather codes to categories
const weatherCategories = {
  clear: [1000],
  cloudy: [1003, 1006, 1009, 1030, 1135, 1147],
  rain: [
    1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
    1198, 1201, 1240, 1243, 1246,
  ],
  snow: [
    1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225,
    1237, 1249, 1252, 1255, 1258, 1261, 1264,
  ],
  storm: [1087],
  rainStorm: [1273, 1276, 1279, 1282],
};

//Mapping categories to objects with text and images
const categoryImages = {
  clear: {
    text: "Clear",
    imageDay: "/icons/ClearDay.svg",
    marginTopDay: -4,
    marginLeftDay: 0,
    imageNight: "/icons/ClearNight.svg",
    marginTopNight: -1,
    marginLeftNight: -1,
    imageNightFullMoon: "/icons/ClearNightFullMoon.svg",
    marginTopNightFullMoon: -1,
    marginLeftNightFullMoon: -2,
  },
  cloudy: {
    text: "Cloudy",
    imageDay: "/icons/CloudyDay.svg",
    marginTopDay: -3,
    marginLeftDay: -2,
    imageNight: "/icons/CloudyNight.svg",
    marginTopNight: -3,
    marginLeftNight: -2,
    imageNightFullMoon: "/icons/CloudyNightFullMoon.svg",
    marginTopNightFullMoon: -3,
    marginLeftNightFullMoon: -2,
  },
  rain: {
    text: "Rainy",
    imageDay: "/icons/RainyDay.svg",
    marginTopDay: -2,
    marginLeftDay: -2,
    imageNight: "/icons/RainyNight.svg",
    marginTopNight: -2,
    marginLeftNight: -2,
    imageNightFullMoon: "/icons/RainyNightFullMoon.svg",
    marginTopNightFullMoon: -2,
    marginLeftNightFullMoon: -2,
  },
  storm: {
    text: "Stormy",
    imageDay: "/icons/StormDay.svg",
    marginTopDay: -2,
    marginLeftDay: -2,
    imageNight: "/icons/StormNight.svg",
    marginTopNight: -2,
    marginLeftNight: -2,
    imageNightFullMoon: "/icons/StormNightFullMoon.svg",
    marginTopNightFullMoon: -2,
    marginLeftNightFullMoon: -2,
  },
  rainStorm: {
    text: "Rain with thunder",
    imageDay: "/icons/RainStormDay.svg",
    marginTopDay: -2,
    marginLeftDay: -2,
    imageNight: "/icons/RainStormNight.svg",
    marginTopNight: -2,
    marginLeftNight: -2,
    imageNightFullMoon: "/icons/RainStormNightFullMoon.svg",
    marginTopNightFullMoon: -3,
    marginLeftNightFullMoon: -2,
  },
  snow: {
    text: "Snowy",
    imageDay: "/icons/SnowDay.svg",
    marginTopDay: -2,
    marginLeftDay: -2,
    imageNight: "/icons/SnowNight.svg",
    marginTopNight: -3,
    marginLeftNight: -2,
    imageNightFullMoon: "/icons/SnowNightFullMoon.svg",
    marginTopNightFullMoon: -3,
    marginLeftNightFullMoon: -2,
    marginBottom: -2,
  },
};

//Method for getting image and text about weather
export default function getImageAndText(code) {
  //Looping through all weatherCategories
  for (const category in weatherCategories) {
    //If category contains code
    if (weatherCategories[category].includes(code)) {
      //Return object with data for that category
      return categoryImages[category];
    }
  }
}
