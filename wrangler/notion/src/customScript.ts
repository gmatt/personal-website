export default () => {
    const moveHeader = () => {
        const notionScroller = document.getElementsByClassName("notion-scroller")[0] as HTMLDivElement;
        if (!(notionScroller?.children[0]?.classList.contains("mattsml-header") ?? true)) {
            const header = document.getElementsByClassName("mattsml-header")[0].cloneNode(true) as HTMLDivElement;
            header.classList.remove("mattsml-header--hidden");
            notionScroller.prepend(header as any);
        }
    };

    (window as any).customMutationScript = () => {
        moveHeader();
    };
};
