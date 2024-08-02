export const iconPhThinBookmarks = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,28H96A12,12,0,0,0,84,40V60H64A12,12,0,0,0,52,72V224a4,4,0,0,0,6.33,3.25L112,188.92l53.69,38.33A3.94,3.94,0,0,0,168,228a4.08,4.08,0,0,0,1.83-.44A4,4,0,0,0,172,224V176.92l25.68,18.33A3.94,3.94,0,0,0,200,196a4.08,4.08,0,0,0,1.83-.44A4,4,0,0,0,204,192V40A12,12,0,0,0,192,28ZM164,216.23l-49.68-35.48a4,4,0,0,0-4.65,0L60,216.23V72a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4Zm32-32-24-17.14V72a12,12,0,0,0-12-12H92V40a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4Z"/></svg>`;
}
