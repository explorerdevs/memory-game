import { useSetTheme, useTheme } from '../../context';
import { classNames } from '../../utils';

type Props = { classname: string };

const ThemeToggle = (props: Props) => {
  const setTheme = useSetTheme();
  const theme = useTheme();

  return (
    <button
      type="button"
      title="Toggle Theme"
      className={classNames(
        'inline-grid aspect-square w-12 place-content-center rounded-full bg-secondary-300',
        props.classname && props.classname
      )}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span>🤭</span>
    </button>
  );
};

export { ThemeToggle };
