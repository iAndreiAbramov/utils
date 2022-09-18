export const useInnerWidth = (cb: Dispatch<SetStateAction<boolean>>, triggerWidth: number): void => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= triggerWidth) {
                cb(true);
            } else {
                cb(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [cb]);
};
