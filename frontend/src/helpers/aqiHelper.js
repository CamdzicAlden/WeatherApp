const aqiValues = {
  Low: [1, 2, 3],
  Moderate: [4, 5, 6],
  High: [7, 8, 9],
  "Very High": [10],
};

//Function for getting text from aqi index
export default function getAQI(index) {
  for (const value in aqiValues) {
    if (aqiValues[value].includes(index)) return value;
  }
}
