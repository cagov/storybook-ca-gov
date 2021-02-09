// Show clear button only if there is a value (County)
export const inputValueCounty = (e) => {
  // console.log("county", e);
  var countyInput = document.getElementById("location-query");
  var clearCounty = document.getElementById("clearLocation");
  if (countyInput && countyInput.value) {
    clearCounty.classList.remove("d-none");
  } else {
    clearCounty.classList.add("d-none");
  }
};

// Show clear button only if there is a value (Activity)
export const inputValueActivity = (e) => {
  // console.log("activity", e);
  var activityInput = document.getElementById("activity-query");
  var clearActivity = document.getElementById("clearActivity");
  if (activityInput && activityInput.value) {
    clearActivity.classList.remove("d-none");
  } else {
    clearActivity.classList.add("d-none");
  }
};
