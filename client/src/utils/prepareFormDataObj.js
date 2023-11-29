const prepareFormDataObj = (selectedOptions) => {
  let formData = {}; //json object to store form answers as body data
  for (let i = 0; i < 19; i++) {
    //Handling exceptional cases where answers are in range instead of fixed value
    switch (i) {
      case 4:
      case 5:
      case 15:
        formData[`q${i}`] = Number(selectedOptions[i]);
        break;
      case 0:
        selectedOptions[i] === "Below 20"
          ? (formData[`q${i}`] = 18)
          : selectedOptions[i] === "Above 30"
          ? (formData[`q${i}`] = 35)
          : (formData[`q${i}`] = 25);
        break;
      case 2:
        selectedOptions[i] === "Other"
          ? (formData[`q${i}`] = `Male`)
          : (formData[`q${i}`] = `${selectedOptions[i]}`);
        break;
      case 3:
        selectedOptions[i] === "0.0-3.3"
          ? (formData[`q${i}`] = 1.7)
          : selectedOptions[i] === "6.6-9.9"
          ? (formData[`q${i}`] = 8.5)
          : (formData[`q${i}`] = 5.1);
        break;
      case 17:
        selectedOptions[i] === "15-20"
          ? (formData[`q${i}`] = 17)
          : selectedOptions[i] === "25-30"
          ? (formData[`q${i}`] = 27)
          : (formData[`q${i}`] = 22);
        break;
      case 13:
      case 14:
        selectedOptions[i] === "Neutral"
          ? (formData[`q${i}`] = `No`)
          : (formData[`q${i}`] = `${selectedOptions[i]}`);
        break;
    }

    if (
      i === 0 ||
      i === 2 ||
      i === 3 ||
      i === 4 ||
      i === 5 ||
      i === 13 ||
      i === 14 ||
      i === 15 ||
      i === 17
    )
      //Skipping exceptional cases handled above
      continue;

    // storing values in json object as it is for normal cases
    formData[`q${i}`] = `${selectedOptions[i]}`;
  }

  return formData;
};

export default prepareFormDataObj;
