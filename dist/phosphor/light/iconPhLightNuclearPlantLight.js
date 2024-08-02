export const iconPhLightNuclearPlantLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M152,34h24a10,10,0,0,0,10-10,6,6,0,0,1,12,0,22,22,0,0,1-22,22H152a10,10,0,0,0-10,10,6,6,0,0,1-12,0A22,22,0,0,1,152,34ZM104,62a6,6,0,0,0,6-6,42,42,0,0,1,42-42h8a6,6,0,0,0,0-12h-8A54.06,54.06,0,0,0,98,56,6,6,0,0,0,104,62ZM246,216a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H34c14-28,30.2-69.68,31.88-114.59A13.92,13.92,0,0,1,79.85,82h88.33a14,14,0,0,1,14,13.37C184.32,144.45,206.92,190,218.28,210H240A6,6,0,0,1,246,216ZM168.18,94H150c.06.46.1.94.12,1.41C151.82,140.32,168,182,182,210h22.55c-12.44-23.1-32.32-66.9-34.4-114.11A2,2,0,0,0,168.18,94ZM47.34,210H168.66c-13.86-28.94-28.86-69.92-30.51-114.14a2,2,0,0,0-2-1.86H79.85a2,2,0,0,0-2,1.86C76.2,140.08,61.2,181.06,47.34,210Z"/></svg>`;
}
