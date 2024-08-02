export const iconPhBoldBookmarksSimpleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M156,56H60A20,20,0,0,0,40,76V228a12,12,0,0,0,19,9.76l49-35,49,35A12,12,0,0,0,176,228V76A20,20,0,0,0,156,56Zm-4,148.68-37-26.45a12,12,0,0,0-14,0L64,204.68V80h88ZM216,36V188a12,12,0,0,1-24,0V40H92a12,12,0,0,1,0-24H196A20,20,0,0,1,216,36Z"/></svg>`;
}
