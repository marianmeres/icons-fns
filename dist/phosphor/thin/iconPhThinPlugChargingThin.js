export const iconPhThinPlugChargingThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,60H172V16a4,4,0,0,0-8,0V60H92V16a4,4,0,0,0-8,0V60H32.55C28.13,60,28,63.59,28,64a4,4,0,0,0,4,4H52v92a36,36,0,0,0,36,36h36v44a4,4,0,0,0,8,0V196h36a36,36,0,0,0,36-36V68h20a4,4,0,0,0,0-8ZM196,160a28,28,0,0,1-28,28H88a28,28,0,0,1-28-28V68H196Zm-87.29-29.72a4,4,0,0,1-.46-3.68l12-32a4,4,0,0,1,7.5,2.8l-10,26.6H144a4,4,0,0,1,3.75,5.4l-12,32a4,4,0,1,1-7.5-2.8l10-26.6H112A4,4,0,0,1,108.71,130.28Z"/></svg>`;
}
