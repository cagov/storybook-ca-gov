export const buildSchoolsCanReopen = ({
  county,
  schoolLabels,
  schoolsCanReopenList = null,
}) => {
  if (schoolsCanReopenList !== null) {
    if (schoolsCanReopenList.indexOf(county) > -1) {
      if (schoolLabels !== null && schoolLabels.schools_may_reopen) {
        return `<p>${schoolLabels.schools_may_reopen}</p> <p>${schoolLabels.schools_info}`;
      }
    }
    if (schoolLabels !== null && schoolLabels.schools_may_not_reopen) {
      return `<p>${schoolLabels.schools_may_not_reopen}</p> <p>${schoolLabels.schools_info}`;
    }
  }
  return "";
};
