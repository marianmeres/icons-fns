export const iconPhThinCoffeeThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M84,56V24a4,4,0,0,1,8,0V56a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,120,60Zm32,0a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,152,60Zm92,60v8a36,36,0,0,1-36,36h-.41a92.53,92.53,0,0,1-35.76,48H208a4,4,0,0,1,0,8H32a4,4,0,0,1,0-8H68.17A92.34,92.34,0,0,1,28,136V88a4,4,0,0,1,4-4H208A36,36,0,0,1,244,120Zm-40,16V92H36v44a84.28,84.28,0,0,0,48.21,76h71.58A84.28,84.28,0,0,0,204,136Zm32-16a28,28,0,0,0-24-27.71V136a91.75,91.75,0,0,1-2.2,19.94A28,28,0,0,0,236,128Z"/></svg>`;
}
