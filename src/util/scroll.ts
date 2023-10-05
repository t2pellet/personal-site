const scrollTo = async (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const scrollOffset = -3 * (window.innerWidth / 100) - 60;
        const scrollPosition = element.offsetTop;
        await window.scrollTo({ behavior: 'smooth', top: scrollPosition + scrollOffset });
    }
};

export default scrollTo;
