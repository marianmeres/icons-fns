export const iconFaRegularFaceGrinWink = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"/></svg>`;
}
