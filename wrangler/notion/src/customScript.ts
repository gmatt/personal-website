export default () => {
    const addHeader = () => {
        const coverImageSelector = ".notion-scroller > div:nth-child(2) > div:first-of-type img";
        const headersPlaceSelector =
            ".notion-scroller > div:nth-child(2) > div:first-of-type > div:first-child > div:first-child";

        const shouldReplaceCover = (element: HTMLImageElement): boolean => {
            return element?.src?.includes("solid_blue.png") ?? false;
        };

        const coverImage = document.querySelector(coverImageSelector) as HTMLImageElement;

        if (coverImage != null && shouldReplaceCover(coverImage)) {
            const headersPlace = document.querySelector(headersPlaceSelector) as HTMLDivElement;

            if (headersPlace?.classList?.contains("mattsml-header") ?? true) {
                return;
            }

            const header = document.querySelector(".mattsml-header")!.cloneNode(true) as HTMLDivElement;
            header.classList.remove("mattsml-header--hidden");
            headersPlace.replaceWith(header);
        }
    };

    (window as any).customMutationScript = () => {
        addHeader();
    };
};
