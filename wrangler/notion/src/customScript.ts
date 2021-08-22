export default () => {
    const moveHeader = () => {
        const notionScroller = document.getElementsByClassName("notion-scroller")[0] as HTMLDivElement;

        if (notionScroller == null) {
            return;
        }

        const coverImage = notionScroller.querySelector(":scope > div:first-child img") as HTMLImageElement;

        if (coverImage == null) {
            return;
        }

        if (!coverImage.src.includes("solid_blue.png")) {
            return;
        }

        const headersPlace = notionScroller.querySelector(
            ":scope > div:first-child > div:first-child > div:first-child",
        );

        if (headersPlace == null) {
            return;
        }

        if (headersPlace.classList.contains("mattsml-header")) {
            return;
        }

        const header = document.getElementsByClassName("mattsml-header")[0].cloneNode(true) as HTMLDivElement;
        header.classList.remove("mattsml-header--hidden");
        headersPlace.replaceWith(header);
    };

    (window as any).customMutationScript = () => {
        moveHeader();
    };
};
