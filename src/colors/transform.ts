import { EL_COLOR_WEIGHT } from './constants';
type RGB = {
  r: number;
  g: number;
  b: number;
};
type HSL = {
  h: number;
  s: number;
  l: number;
};

type HEX_VALUE =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F';

type HEX = string;

type ScaleColor = {
  [key in string]: string;
};

const RGBUnit = 255;
const HEX_MAP: Record<HEX_VALUE, number> = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

// 归一化处理，统一返回 HEX 类型的颜色值
function normalizationColor(color: string): HEX {
  const prefix = /^(#|hsl|rgb)/i.exec(color)?.[1];

  if (!prefix) {
    throw new TypeError('color is invalid.');
  }

  const colorVal = color.replace(prefix, '').trim();
  if (prefix === '#') {
    return fixHexVal(colorVal);
  } else if (prefix.toLocaleLowerCase() === 'hsl') {
    return fixHslVal(colorVal);
  } else {
    return fixRgbVal(colorVal);
  }

  function fixHexVal(val: string) {
    const len = val.length;
    if (len === 8) {
      return `#${val.substring(0, 6)}`; // 舍弃掉透明度
    } else if (len === 6) {
      return `#${val}`;
    } else if (len === 3) {
      return val.split('').reduce((pre, cur) => `${pre}${cur + cur}`, '#');
    } else {
      throw new TypeError('hex color is invalid.');
    }
  }

  function fixHslVal(val: string) {
    const hslVal = val
      .substring(1, val.length - 1)
      .split(',')
      .map((v) => parseInt(v.trim()));
    return hslToHex({
      h: hslVal[0],
      s: hslVal[1],
      l: hslVal[2],
    });
  }

  function fixRgbVal(val: string) {
    const rgb = val
      .substring(1, val.length - 1)
      .split(',')
      .map((v) => parseInt(v.trim()));

    // 舍弃掉alphe
    return rgbToHex({
      r: rgb[0],
      g: rgb[1],
      b: rgb[2],
    });
  }
}

/**
 * rgb -> hsl
 * @param rgb RGB
 * @returns HSL
 */
function rgbToHsl(rgb: RGB): HSL {
  let { r, g, b } = rgb;
  const hsl = {
    h: 0,
    s: 0,
    l: 0,
  };

  // 计算rgb基数 ∈ [0, 1]
  r /= RGBUnit;
  g /= RGBUnit;
  b /= RGBUnit;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // 计算h
  if (max === min) {
    hsl.h = 0;
  } else if (max === r) {
    hsl.h = 60 * ((g - b) / (max - min)) + (g >= b ? 0 : 360);
  } else if (max === g) {
    hsl.h = 60 * ((b - r) / (max - min)) + 120;
  } else {
    hsl.h = 60 * ((r - g) / (max - min)) + 240;
  }
  hsl.h = hsl.h > 360 ? hsl.h - 360 : hsl.h;

  // 计算l
  hsl.l = (max + min) / 2;

  // 计算s
  if (hsl.l === 0 || max === min) {
    // 灰/白/黑
    hsl.s = 0;
  } else if (hsl.l > 0 && hsl.l <= 0.5) {
    hsl.s = (max - min) / (max + min);
  } else {
    hsl.s = (max - min) / (2 - (max + min));
  }

  return hsl;
}

/**
 * hsl -> rgb
 * @param hsl HSL
 * @returns RGB
 */
function hslToRgb(hsl: HSL): RGB {
  const { h, s, l } = hsl;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hUnit = h / 360; // 色相转换为 [0, 1]

  const Cr = fillCircleVal(hUnit + 1 / 3);
  const Cg = fillCircleVal(hUnit);
  const Cb = fillCircleVal(hUnit - 1 / 3);

  // 保持 [0, 1] 环状取值
  function fillCircleVal(val: number): number {
    return val < 0 ? val + 1 : val > 1 ? val - 1 : val;
  }

  function computedRgb(val: number): number {
    let colorVal: number;
    if (val < 1 / 6) {
      colorVal = p + (q - p) * 6 * val;
    } else if (val >= 1 / 6 && val < 1 / 2) {
      colorVal = q;
    } else if (val >= 1 / 2 && val < 2 / 3) {
      colorVal = p + (q - p) * 6 * (2 / 3 - val);
    } else {
      colorVal = p;
    }
    return colorVal * 255;
  }

  return {
    r: Number(computedRgb(Cr).toFixed(0)),
    g: Number(computedRgb(Cg).toFixed(0)),
    b: Number(computedRgb(Cb).toFixed(0)),
  };
}

/**
 * 16进制 转 rgb
 * @param hex HEX
 * @returns RGB
 */
function hexToRGB(hex: HEX): RGB {
  hex = hex.toUpperCase();
  const hexRegExp = /^#([0-9A-F]{6})$/;
  if (!hexRegExp.test(hex)) {
    throw new Error('请传入合法的16进制颜色值，eg: #FF0000');
  }

  const hexValArr = (hexRegExp.exec(hex)?.[1] || '000000').split('') as Array<HEX_VALUE>;

  return {
    r: HEX_MAP[hexValArr[0]] * 16 + HEX_MAP[hexValArr[1]],
    g: HEX_MAP[hexValArr[2]] * 16 + HEX_MAP[hexValArr[3]],
    b: HEX_MAP[hexValArr[4]] * 16 + HEX_MAP[hexValArr[5]],
  };
}

/**
 * rgb 转 16进制
 * @param rgb RGB
 * @returns #HEX{6}
 */
function rgbToHex(rgb: RGB): HEX {
  const HEX_MAP_REVERSE: Record<string, HEX_VALUE> = {};
  for (const key in HEX_MAP) {
    HEX_MAP_REVERSE[HEX_MAP[key as HEX_VALUE]] = key as HEX_VALUE;
  }
  function getRemainderAndQuotient(val: number): `${HEX_VALUE}${HEX_VALUE}` {
    val = Math.round(val);
    return `${HEX_MAP_REVERSE[Math.floor(val / 16)]}${HEX_MAP_REVERSE[val % 16]}`;
  }

  return `#${getRemainderAndQuotient(rgb.r)}${getRemainderAndQuotient(
    rgb.g,
  )}${getRemainderAndQuotient(rgb.b)}`;
}

/** hsl 转 16进制 */
function hslToHex(hsl: HSL): HEX {
  return rgbToHex(hslToRgb(hsl));
}

/** 16进制 转 hsl */
function hexToHsl(hex: HEX): HSL {
  return rgbToHsl(hexToRGB(hex));
}

/** 混合基础色获取 */
function getMixColorFromVar(isDark?: boolean) {
  const VAR_WHITE = '--el-color-white';
  const VAR_BLACK = '--el-color-black';
  const VAR_BG = '--el-bg-color';

  const mixLightColor = hexToRGB(
    normalizationColor(
      getComputedStyle(document.documentElement)
        .getPropertyValue(isDark ? VAR_BG : VAR_WHITE)
        .trim(),
    ),
  );

  const mixDarkColor = hexToRGB(
    normalizationColor(
      getComputedStyle(document.documentElement)
        .getPropertyValue(isDark ? VAR_BLACK : VAR_WHITE)
        .trim(),
    ),
  );

  return {
    mixLightColor,
    mixDarkColor,
  };
}

type GenerateMixColor = (
  base: string,
  isDark?: boolean,
) => { DEFAULT_COLOR: HEX; DEFAULT_DARK: HEX; variables: ScaleColor };

// 生成混合色（混黑 + 混白）
const generateMixColor: GenerateMixColor = (base, isDark) => {
  // 基准色统一转换为RGB
  base = normalizationColor(base);
  const rgbBase = hexToRGB(base);

  const { mixLightColor, mixDarkColor } = getMixColorFromVar(isDark);

  // 混合色
  function mix(color: RGB, mixColor: RGB, weight: number): RGB {
    return {
      r: color.r * (1 - weight) + mixColor.r * weight,
      g: color.g * (1 - weight) + mixColor.g * weight,
      b: color.b * (1 - weight) + mixColor.b * weight,
    };
  }

  const mixColor = isDark ? mixDarkColor : mixLightColor;

  const variables: ScaleColor = {};

  EL_COLOR_WEIGHT.forEach((key) => {
    variables[`${key / 100}`] = rgbToHex(mix(rgbBase, mixColor, Number(key) / 1000));
  });

  return {
    DEFAULT_COLOR: base,
    DEFAULT_DARK: rgbToHex(mix(rgbBase, mixDarkColor, 0.2)),
    variables,
  };
};

export { generateMixColor, rgbToHsl, rgbToHex, hslToRgb, hslToHex, hexToRGB, hexToHsl };
