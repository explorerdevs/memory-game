type IClassNames = (
  ...args: Array<undefined | null | string | boolean>
) => string;
const filterBoolean = <T>(arg: T) => Boolean(arg) && typeof arg !== 'boolean';
/**
 * This function returns classes based on conditions
 * that evaluate to true. It removes values that
 * evaluate to literal booleans, false, null and undefined.
 * @param args (string | boolean | null | undefined)[]
 * @returns string
 * @example classNames('base', undefined, ['more', 'classes'], hasError && 'bg-red', isEnabled || 'pointer-events-none', isTitle ? 'font-semibold' : 'font-normal')
 * @returns "base more classes bg-red font-normal"
 */
// (arg) => Boolean(arg) && typeof arg !== 'boolean'
export const classNames: IClassNames = (...args) =>
  args.flat().filter(filterBoolean).join(' ').trim();

export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const clean = (data: string) => {
  return data?.replace(/[|&;$%@"<>()\\+,]/g, '');
};
