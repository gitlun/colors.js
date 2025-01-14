// Type definitions for Colors.js 1.2
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Staffan Eketorp <https://github.com/staeke>
// Definitions: https://github.com/Marak/colors.js

export interface Color {
    (text: string): string;

    strip: Color;
    stripColors: Color;

    black: Color;
    red: Color;
    green: Color;
    yellow: Color;
    blue: Color;
    magenta: Color;
    cyan: Color;
    white: Color;
    gray: Color;
    grey: Color;

    brightBlue: Color;
    brightYellow: Color;
    brightCyan: Color;
    brightGreen: Color;
    brightRed: Color;

    bgBlack: Color;
    bgRed: Color;
    bgGreen: Color;
    bgYellow: Color;
    bgBlue: Color;
    bgMagenta: Color;
    bgCyan: Color;
    bgWhite: Color;
    bgGrey: Color;

    bgBrightBlue: Color;

    reset: Color;
    bold: Color;
    dim: Color;
    italic: Color;
    underline: Color;
    inverse: Color;
    hidden: Color;
    strikethrough: Color;

    rainbow: Color;
    zebra: Color;
    america: Color;
    trap: Color;
    random: Color;
    zalgo: Color;
}

export function enable(): void;
export function disable(): void;
export function setTheme(theme: any): void;

export let enabled: boolean;

export const strip: Color;
export const stripColors: Color;

export const black: Color;
export const red: Color;
export const green: Color;
export const yellow: Color;
export const blue: Color;
export const magenta: Color;
export const cyan: Color;
export const white: Color;
export const gray: Color;
export const grey: Color;

export const brightBlue: Color;
export const brightYellow: Color;
export const brightCyan: Color;
export const brightGreen: Color;
export const brightRed: Color;

export const bgBlack: Color;
export const bgRed: Color;
export const bgGreen: Color;
export const bgYellow: Color;
export const bgBlue: Color;
export const bgMagenta: Color;
export const bgCyan: Color;
export const bgWhite: Color;
export const bgGrey: Color;

export const bgBrightBlue: Color;

export const reset: Color;
export const bold: Color;
export const dim: Color;
export const italic: Color;
export const underline: Color;
export const inverse: Color;
export const hidden: Color;
export const strikethrough: Color;

export const rainbow: Color;
export const zebra: Color;
export const america: Color;
export const trap: Color;
export const random: Color;
export const zalgo: Color;
