export const USER = "USER";

export const authenticated = user => {
  return {
    type: USER,
    user
  }
}