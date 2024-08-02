export const iconPhBoldNetworkXBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,108H140V92h4a20,20,0,0,0,20-20V40a20,20,0,0,0-20-20H112A20,20,0,0,0,92,40V72a20,20,0,0,0,20,20h4v16H24a12,12,0,0,0,0,24H52v24H48a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20H76V132H180v8a12,12,0,0,0,24,0v-8h28a12,12,0,0,0,0-24ZM116,44h24V68H116ZM76,204H52V180H76Zm148.49-27.51L209,192l15.52,15.51a12,12,0,0,1-17,17L192,209l-15.51,15.52a12,12,0,0,1-17-17L175,192l-15.52-15.51a12,12,0,0,1,17-17L192,175l15.51-15.52a12,12,0,0,1,17,17Z"/></svg>`;
}
