import {
  primaryColors,
  neutralColors,
  textColors,
  successColors,
  errorColors,
  warningColors,
} from './colors';
import { primaryFont } from './typography';

export const defaultTheme = new Map([
  ['primaryColor', primaryColors.get(200)],
  ['primaryHoverColor', primaryColors.get(100)],
  ['primaryActiveColor', primaryColors.get(400)],
  ['primaryActiveBorderColor', neutralColors.get(600)],
  ['primaryFocusBorderColor', neutralColors.get(600)],
  ['secondaryColor', neutralColors.get(100)],
  ['textColorOnPrimary', textColors.get('inverted')],
  ['textColorInverted', textColors.get('inverted')],
  ['disabled', neutralColors.get(400)],
  ['formElementBackground', neutralColors.get(100)],
  ['textOnFormElementBackground', neutralColors.get(600)],
  ['primaryFont', primaryFont],
  [
    'status',
    new Map(
      Object.entries({
        warningColor: warningColors.get(200),
        warningColorHover: warningColors.get(100),
        warningColorActive: warningColors.get(300),
        warningColorActiveBorderColor: neutralColors.get(600),
        warningColorFocusBorderColor: neutralColors.get(600),
        errorColor: errorColors.get(200),
        errorColorHover: errorColors.get(100),
        errorColorActive: errorColors.get(300),
        errorColorActiveBorderColor: neutralColors.get(600),
        errorColorFocusBorderColor: neutralColors.get(600),
        successColor: successColors.get(200),
        successColorHover: successColors.get(100),
        successColorActive: successColors.get(300),
        successColorActiveBorderColor: neutralColors.get(600),
        successColorFocusBorderColor: neutralColors.get(600),
      })
    ),
  ],
]);

export const alternateTheme = new Map([
  ['primaryColor', neutralColors.get(400)],
  ['primaryHoverColor', neutralColors.get(300)],
  ['primaryActiveColor', neutralColors.get(300)],
  ['primaryActiveBorderColor', neutralColors.get(300)],
  ['primaryFocusBorderColor', neutralColors.get(300)],
  ['secondaryColor', neutralColors.get(500)],
  ['textColorOnPrimary', textColors.get('inverted')],
  ['textColorInverted', textColors.get('inverted')],
  ['disabled', neutralColors.get(400)],
  ['formElementBackground', primaryColors.get(100)],
  ['textOnFormElementBackground', primaryColors.get(600)],
  ['primaryFont', primaryFont],
  [
    'status',
    new Map(
      Object.entries({
        warningColor: warningColors.get(200),
        warningColorHover: warningColors.get(100),
        warningColorActive: warningColors.get(300),
        warningColorActiveBorderColor: neutralColors.get(600),
        warningColorFocusBorderColor: neutralColors.get(600),
        errorColor: errorColors.get(200),
        errorColorHover: errorColors.get(100),
        errorColorActive: errorColors.get(300),
        errorColorActiveBorderColor: neutralColors.get(600),
        errorColorFocusBorderColor: neutralColors.get(600),
        successColor: successColors.get(200),
        successColorHover: successColors.get(100),
        successColorActive: successColors.get(300),
        successColorActiveBorderColor: neutralColors.get(600),
        successColorFocusBorderColor: neutralColors.get(600),
      })
    ),
  ],
]);
