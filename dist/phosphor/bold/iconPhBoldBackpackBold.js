export const iconPhBoldBackpackBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,48.55V36A28,28,0,0,0,144,8H112A28,28,0,0,0,84,36V48.55A60.08,60.08,0,0,0,32,108V220a20,20,0,0,0,20,20H204a20,20,0,0,0,20-20V108A60.08,60.08,0,0,0,172,48.55ZM112,32h32a4,4,0,0,1,4,4V48H108V36A4,4,0,0,1,112,32Zm48,128H96v-8a4,4,0,0,1,4-4h56a4,4,0,0,1,4,4ZM96,184h64v32H96Zm104,32H184V152a28,28,0,0,0-28-28H100a28,28,0,0,0-28,28v64H56V108A36,36,0,0,1,92,72h72a36,36,0,0,1,36,36ZM160,100a12,12,0,0,1-12,12H108a12,12,0,0,1,0-24h40A12,12,0,0,1,160,100Z"/></svg>`;
}
