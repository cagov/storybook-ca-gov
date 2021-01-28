let schoolReopeningStatuses = function (county) {
    if (!schoolStrings) {
      return "";
    }
    if (schoolOKList.indexOf(county) > -1) {
      return schoolStrings.schools_may_reopen + schoolStrings.schools_info;
    }
    return schoolStrings.schools_may_not_reopen + schoolStrings.schools_info;
  };