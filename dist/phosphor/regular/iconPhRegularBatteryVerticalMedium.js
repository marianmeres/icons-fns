export const iconPhRegularBatteryVerticalMedium = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,32H80A24,24,0,0,0,56,56V224a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V56A24,24,0,0,0,176,32Zm8,192a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Zm-16-24a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,200ZM88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8Zm80,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Z"/></svg>`;
}
