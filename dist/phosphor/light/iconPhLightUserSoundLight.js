export const iconPhLightUserSoundLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M139,166.26a66,66,0,1,0-62,0c-22,6.22-41.88,19.15-57.61,37.88a6,6,0,0,0,9.18,7.72C49.11,187.45,77.31,174,108,174s58.9,13.45,79.41,37.86a6,6,0,1,0,9.18-7.72C180.86,185.41,161,172.48,139,166.26ZM54,108a54,54,0,1,1,54,54A54.06,54.06,0,0,1,54,108ZM205.52,66.39a106.33,106.33,0,0,1,0,83.22,6,6,0,0,1-11-4.71,94.29,94.29,0,0,0,0-73.8,6,6,0,0,1,11-4.71ZM246,108a137.16,137.16,0,0,1-11.12,54.37,6,6,0,0,1-11-4.74,126.41,126.41,0,0,0,0-99.26,6,6,0,0,1,11-4.74A137.16,137.16,0,0,1,246,108Z"/></svg>`;
}
