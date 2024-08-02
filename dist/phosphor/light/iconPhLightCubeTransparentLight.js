export const iconPhLightCubeTransparentLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.24,91.75,164,35.56A5.93,5.93,0,0,0,160,34H40a6,6,0,0,0-6,6V160a6,6,0,0,0,1.76,4.25l56,56A6,6,0,0,0,96,222H216a6,6,0,0,0,6-6V96A6,6,0,0,0,220.24,91.75ZM166,54.48,201.52,90H166Zm-76,147L54.48,166H90ZM90,154H46V54.48l44,44ZM54.48,46H154V90H98.48ZM154,102v52H102V102ZM102,210V166h55.52l44,44Zm108-8.48-44-44V102h44Z"/></svg>`;
}
