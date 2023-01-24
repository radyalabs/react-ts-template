import { useLayoutContext } from 'contexts/LayoutContext/LayoutContext';

const useHeader = () => {
  const { isCollapsed, toggleCollapsed } = useLayoutContext();

  return { isCollapsed, toggleCollapsed };
};

export default useHeader;
