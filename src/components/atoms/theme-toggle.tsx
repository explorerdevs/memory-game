import { useSetTheme, useTheme } from '../../context';

type Props = {};

const ThemeToggle = (props: Props) => {
  const setTheme = useSetTheme();
  const theme = useTheme();
  return (
    <button
      type="button"
      title="Toggle Theme"
      className="inline-grid aspect-square w-12 place-content-center rounded-full bg-secondary-300"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span>🤭</span>
    </button>
  );
};

export { ThemeToggle };
