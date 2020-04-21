export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(schedule) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { schedule },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
  };
}
