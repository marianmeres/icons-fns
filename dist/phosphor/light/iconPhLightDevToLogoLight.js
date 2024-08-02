export const iconPhLightDevToLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,58H24A14,14,0,0,0,10,72V184a14,14,0,0,0,14,14H232a14,14,0,0,0,14-14V72A14,14,0,0,0,232,58Zm2,126a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H232a2,2,0,0,1,2,2ZM126,102v20h10a6,6,0,0,1,0,12H126v20h18a6,6,0,0,1,0,12H120a6,6,0,0,1-6-6V96a6,6,0,0,1,6-6h24a6,6,0,0,1,0,12Zm87.78-4.38-18,64a6,6,0,0,1-11.56,0l-18-64a6,6,0,0,1,11.56-3.24L190,137.84l12.22-43.46a6,6,0,1,1,11.56,3.24ZM64,90H56a6,6,0,0,0-6,6v64a6,6,0,0,0,6,6h8a30,30,0,0,0,30-30V120A30,30,0,0,0,64,90Zm18,46a18,18,0,0,1-18,18H62V102h2a18,18,0,0,1,18,18Z"/></svg>`;
}
