export const iconPhBoldLockersBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,80a12,12,0,0,1-12,12H164a12,12,0,0,1,0-24h16A12,12,0,0,1,192,80Zm-12,28H164a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24ZM76,92H92a12,12,0,0,0,0-24H76a12,12,0,0,0,0,24Zm16,16H76a12,12,0,0,0,0,24H92a12,12,0,0,0,0-24ZM228,48V224a12,12,0,0,1-24,0V212H140v12a12,12,0,0,1-24,0V212H52v12a12,12,0,0,1-24,0V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM116,188V52H52V188Zm24,0h64V52H140Z"/></svg>`;
}
