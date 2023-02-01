export const useOverflow = (isPopupShown: boolean): void => {
    if (isPopupShown) {
        const div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);
        const clientWidth = div.clientWidth;
        const offsetWidth = div.offsetWidth;
        document.body.style.marginRight = `${offsetWidth - clientWidth}px`;
        div.remove();
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};
