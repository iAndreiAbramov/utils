import { RefObject, useCallback, useEffect } from 'react';

export const useOuterClick = ({
  element,
  cb,
}: {
  element: RefObject<HTMLDivElement>;
  cb: () => void;
}): void => {
  const clickOutOfElement = useCallback(
    (event: Event) => element.current && !element.current?.contains(event.target as Node),
    [element],
  );

  const handleOutsideClick = useCallback(
    (event: Event) => {
      if (clickOutOfElement(event)) {
        cb();
      }
    },
    [clickOutOfElement, cb],
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => document.removeEventListener('click', handleOutsideClick, true);
  }, [handleOutsideClick]);
};
