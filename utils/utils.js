//

export const isValidHexColor = (hexCol) => {
  /* eslint-disable no-useless-escape */
  const hexColRegx = new RegExp(/^#[0-9A-F]{3}$|^#[0-9A-F]{6}/i);
  return hexColRegx.test(hexCol) || false;
};
