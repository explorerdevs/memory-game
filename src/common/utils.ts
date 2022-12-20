type IClsx = (...args: Array<undefined | null | string | boolean>) => string;

/**
 *
 * @param args (string | boolean | null | undefined)[]
 * @returns string
 * @example clsx('base', undefined, ['more', 'classes'], hasError && 'bg-red', isEnabled || 'pointer-events-none', isTitle ? 'font-semibold' : 'font-normal')
 * @returns "base more classes bg-red font-normal"
 */
export const clsx: IClsx = (...args) =>
  args
    .flat()
    .filter((arg) => Boolean(arg) && typeof arg !== 'boolean')
    .join(' ')
    .trim();
