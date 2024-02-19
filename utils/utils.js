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

/**
 *
 * @param {String} hexColor
 * @returns
 */
export const hexToHslObj = (hexColor) => {
  if (!isValidHexColor(hexColor)) return { h: 0, s: 0, l: 0 };

  // Ensure hexColor starts with #
  hexColor = hexColor.startsWith("#") ? hexColor : "#" + hexColor;

  // Remove the # and convert to RGB
  const rgbColor = hexToRgbObj(hexColor);

  // Normalize RGB values
  const r = rgbColor.r / 255;
  const g = rgbColor.g / 255;
  const b = rgbColor.b / 255;

  // Find the minimum and maximum values of RGB
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;

  // Calculate the hue
  let hue = 0;
  if (delta === 0) {
    hue = 0;
  } else if (cmax === r) {
    hue = ((g - b) / delta) % 6;
  } else if (cmax === g) {
    hue = (b - r) / delta + 2;
  } else {
    hue = (r - g) / delta + 4;
  }

  hue = Math.round(hue * 60);

  // Ensure hue is non-negative
  if (hue < 0) {
    hue += 360;
  }

  // Calculate lightness
  const lightness = (cmax + cmin) / 2;

  // Calculate saturation
  const saturation =
    delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

  return {
    h: Math.round(hue) ?? 0,
    s: Math.round(saturation * 100) ?? 0,
    l: Math.round(lightness * 100) ?? 0,
  };
};
