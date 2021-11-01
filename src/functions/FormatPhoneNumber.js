export const formatPhoneNumber = (value) => {
  let phoneNumber = value.replace(/[^\d]/g, '').toString();
  const phoneNumberLength = phoneNumber.length;
  switch (true) {
    case phoneNumberLength > 6:
      phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
      break;
    case phoneNumberLength < 7 && phoneNumberLength > 3:
      phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}`;
      break;
    default:
      null;
  }
  return phoneNumber;
};
