import { clsx } from '../../common';
import { useSetTheme, useTheme } from '../../context';

type Props = { classname: string };

const ThemeToggle = (props: Props) => {
  const setTheme = useSetTheme();
  const theme = useTheme();
  const classes = clsx(
    'inline-grid aspect-square w-12 place-content-center rounded-full bg-secondary-300',
    props.classname && props.classname
  );
  return (
    <button
      type="button"
      title="Toggle Theme"
      className={classes}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span>🤭</span>
    </button>
  );
};

export { ThemeToggle };
