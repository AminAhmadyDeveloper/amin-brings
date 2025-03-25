export const cleanPhoneNumber = (phoneNumber?: string | null) => {
  return phoneNumber?.replace('+98', '0');
};
