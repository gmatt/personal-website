export default () => {
    setTimeout(() => {
        const header = document.getElementById("mattsml-header")?.cloneNode(true) as HTMLDivElement;
        header.classList.remove("mattsml-header--hidden");
        // TODO Fix types.
        document.getElementsByClassName("notion-scroller")[0].prepend(header as any);
    }, 1000);
};
