export const iconPhThinGlobeSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm91.9,96h-48c-1.15-45.55-21.74-74.52-33.48-87.4A92.14,92.14,0,0,1,219.91,124ZM128,218.61c-8.32-8-34.57-37.13-35.93-86.61h71.86C162.57,181.48,136.32,210.61,128,218.61ZM92.07,124C93.43,74.52,119.68,45.39,128,37.39c8.32,8,34.57,37.13,35.93,86.61Zm25.47-87.4C105.8,49.48,85.21,78.45,84.06,124h-48A92.14,92.14,0,0,1,117.54,36.6ZM36.09,132h48c1.15,45.55,21.74,74.52,33.48,87.4A92.14,92.14,0,0,1,36.09,132Zm102.37,87.4c11.74-12.88,32.33-41.85,33.48-87.4h48A92.14,92.14,0,0,1,138.46,219.4Z"/></svg>`;
}
