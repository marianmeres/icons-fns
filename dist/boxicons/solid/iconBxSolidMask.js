export const iconBxSolidMask = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M19 6H5C3.346 6 2 7.346 2 9v5c0 2.206 1.794 4 4 4h1.637c1.166 0 2.28-.557 2.981-1.491.66-.879 2.104-.88 2.764.001A3.744 3.744 0 0 0 16.363 18H18c2.206 0 4-1.794 4-4V9c0-1.654-1.346-3-3-3zM7.5 13C6.119 13 5 12.328 5 11.5S6.119 10 7.5 10s2.5.672 2.5 1.5S8.881 13 7.5 13zm9 0c-1.381 0-2.5-.672-2.5-1.5s1.119-1.5 2.5-1.5 2.5.672 2.5 1.5-1.119 1.5-2.5 1.5z"/></svg>`;
}
