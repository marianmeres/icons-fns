/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidHouseMedicalFlag(props) {
    // Backward compatible signature support: fn(cls, size, style)
    if (props === null || props === undefined)
        props = {};
    if (typeof props !== 'object')
        props = { class: props || '' };
    if (arguments.length > 1)
        props.size ??= arguments[1];
    if (arguments.length > 2)
        props.style ??= arguments[2];
    // 
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M480 0c17.7 0 32 14.3 32 32H624c8.8 0 16 7.2 16 16V176c0 8.8-7.2 16-16 16H512V512H448V192 32c0-17.7 14.3-32 32-32zM276.8 39.7L416 159V512h1l-.2 0H96c-17.7 0-32-14.3-32-32V288H32c-13.4 0-25.4-8.3-30-20.9s-1-26.7 9.2-35.4l224-192c12-10.3 29.7-10.3 41.7 0zM224 208v48H176c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320h48c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H288V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16z"/></svg>`;
}
