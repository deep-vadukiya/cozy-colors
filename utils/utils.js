//

export const isValidHexColor = (hexCol) => {
  /* eslint-disable no-useless-escape */
  const hexColRegx = new RegExp(/^#[0-9A-F]{3}$|^#[0-9A-F]{6}/i);
  return hexColRegx.test(hexCol) || false;
};

/**
 *
 * @param {String} hex
 * @returns
 */
export const hexToRgbObj = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 *
 * @param {Object} rgbObj: Object of the rgb color. Example: { r: 119, g: 53, b: 17 }
 * @returns will returns the RGB string of the given rgb object
 */
export const rgbObjToRgbString = (rgbObj) => {
  if (!rgbObj) return;

  const tempStr =
    "rgb" + "(" + rgbObj.r + "," + rgbObj.g + "," + rgbObj.b + ")";

  return tempStr;
};
