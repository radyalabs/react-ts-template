import { useLayoutContext } from 'contexts/LayoutContext/LayoutContext';

const useContent = () => {
  const { isCollapsed } = useLayoutContext();
  return { isCollapsed };
};
export default useContent;
