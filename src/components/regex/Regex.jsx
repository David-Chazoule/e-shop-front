export const ValidEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

export const ValidPseudo = new RegExp("^[a-zA-Z0-9_.-]*$");

export const ValidPassword = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

export const ValidNameFirstName = new RegExp("^[a-zA-Z]+$");
