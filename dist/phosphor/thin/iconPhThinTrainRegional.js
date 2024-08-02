export const iconPhThinTrainRegional = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219.86,119,197.47,36.84A12,12,0,0,0,185.89,28H70.11a12,12,0,0,0-11.58,8.84L36.14,119a3.94,3.94,0,0,0,0,2.1l22.39,82.11A12,12,0,0,0,70.11,212H88L68.8,237.6a4,4,0,1,0,6.4,4.8L98,212h60l22.8,30.4a4,4,0,0,0,6.4-4.8L168,212h17.89a12,12,0,0,0,11.58-8.84l22.39-82.11A3.94,3.94,0,0,0,219.86,119ZM66.25,39a4,4,0,0,1,3.86-3H185.89a4,4,0,0,1,3.86,3L211,116.84l-83,15.09L45,116.84Zm0,162.1-20.72-76L124,139.34V204H70.11A4,4,0,0,1,66.25,201.05Zm123.5,0a4,4,0,0,1-3.86,2.95H132V139.34l78.47-14.27ZM92,88a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,88Z"/></svg>`;
}
