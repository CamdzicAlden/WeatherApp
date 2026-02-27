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
    imageNight: "/icons/ClearNight.svg",
    imageNightFullMoon: "/icons/ClearNightFullMoon.svg",
  },
  cloudy: {
    text: "Cloudy",
    imageDay: "/icons/CloudyDay.svg",
    imageNight: "/icons/CloudyNight.svg",
    imageNightFullMoon: "/icons/CloudyNightFullMoon.svg",
  },
  rain: {
    text: "Rainy",
    imageDay: "/icons/RainyDay.svg",
    imageNight: "/icons/RainyNight.svg",
    imageNightFullMoon: "/icons/RainyNightFullMoon.svg",
  },
  storm: {
    text: "Stormy",
    imageDay: "/icons/StormDay.svg",
    imageNight: "/icons/StormNight.svg",
    imageNightFullMoon: "/icons/StormNightFullMoon.svg",
  },
  rainStorm: {
    text: "Rain with thunder",
    imageDay: "/icons/RainStormDay.svg",
    imageNight: "/icons/RainStormNight.svg",
    imageNightFullMoon: "/icons/RainStormNightFullMoon.svg",
  },
  snow: {
    text: "Snowy",
    imageDay: "/icons/SnowDay.svg",
    imageNight: "/icons/SnowNight.svg",
    imageNightFullMoon: "/icons/SnowNightFullMoon.svg",
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
