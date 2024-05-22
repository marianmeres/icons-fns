export const iconBxSolidMessageRoundedCheck = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 5.589 2 10c0 2.907 1.897 5.515 5 6.934V22l5.34-4.005C17.697 17.853 22 14.32 22 10c0-4.411-4.486-8-10-8zm-1 12.414-3.707-3.707 1.414-1.414L11 11.586l4.793-4.793 1.414 1.414L11 14.414z"/></svg>`;
}
