export const buildSchoolsCanReopen = ({ county, schoolLabels }) => {
  if (!schoolLabels.schools_may_reopen) {
    return "";
  }
  if (schoolOKList.indexOf(county) > -1) {
    return `<p>${schoolLabels.schools_may_reopen}</p> <p>${schoolLabels.schools_info}`;
  }
  return `<p>${schoolLabels.schools_may_not_reopen}</p> <p>${schoolLabels.schools_info}`;
};
