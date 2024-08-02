export const iconPhThinMicrosoftPowerpointLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M96,100H80a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V140H96a20,20,0,0,0,0-40Zm0,32H84V108H96a12,12,0,0,1,0,24ZM136,28A100.3,100.3,0,0,0,56,68H40A12,12,0,0,0,28,80v96a12,12,0,0,0,12,12H56A100,100,0,1,0,136,28Zm91.91,96H156V80a12,12,0,0,0-12-12h-4V36.09A92.13,92.13,0,0,1,227.91,124ZM132,36.1V68H66.26A92.36,92.36,0,0,1,132,36.1ZM36,176V80a4,4,0,0,1,4-4H144a4,4,0,0,1,4,4v96a4,4,0,0,1-4,4H40A4,4,0,0,1,36,176Zm30.26,12H132v31.9A92.36,92.36,0,0,1,66.26,188ZM140,219.91V188h4a12,12,0,0,0,12-12V132h71.91A92.13,92.13,0,0,1,140,219.91Z"/></svg>`;
}
