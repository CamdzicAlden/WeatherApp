const indexToText = {
  Low: [0, 1, 2],
  Moderate: [3, 4, 5],
  High: [6, 7],
  "Very High": [8, 9, 10],
  Extreme: [11],
};

export default function returnMessage(uvIndex) {
  for (const index in indexToText) {
    if (indexToText[index].includes(uvIndex)) return index;
  }
  return "Extreme";
}
