export const iconPhBoldCastleTurret = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,212H204V117l10.14-10.14A19.86,19.86,0,0,0,220,92.69V48a20,20,0,0,0-20-20H56A20,20,0,0,0,36,48V92.69a19.86,19.86,0,0,0,5.86,14.14L52,117v95H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM72.49,103.51,60,91V52H88V76a12,12,0,0,0,24,0V52h32V76a12,12,0,0,0,24,0V52h28V91l-12.49,12.48A12,12,0,0,0,180,112V212H164V168a36,36,0,0,0-72,0v44H76V112A12,12,0,0,0,72.49,103.51ZM140,212H116V168a12,12,0,0,1,24,0Z"/></svg>`;
}
