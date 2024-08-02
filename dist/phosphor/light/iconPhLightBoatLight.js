export const iconPhLightBoatLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.43,112.48,206,107.68V56a14,14,0,0,0-14-14H134V24a6,6,0,0,0-12,0V42H64A14,14,0,0,0,50,56v51.68l-14.43,4.8A14,14,0,0,0,26,125.77V152c0,60,96.44,84.79,100.54,85.82a6,6,0,0,0,2.92,0,235.44,235.44,0,0,0,49.4-19.54C212.32,200.15,230,177.24,230,152V125.77A14,14,0,0,0,220.43,112.48ZM62,56a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2v47.68L129.9,82.31a6,6,0,0,0-3.8,0L62,103.68Zm156,96c0,47.1-78.28,70.54-90,73.79C116.27,222.54,38,199.1,38,152V125.77a2,2,0,0,1,1.37-1.9L122,96.32V168a6,6,0,0,0,12,0V96.32l82.63,27.55a2,2,0,0,1,1.37,1.9Z"/></svg>`;
}
