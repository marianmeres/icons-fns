export const iconPhBoldFileJpg = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,140H104a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0v-4h4a32,32,0,0,0,0-64Zm0,40h-4V164h4a8,8,0,0,1,0,16Zm104,20.87a12,12,0,0,1-3.33,8.3A34,34,0,0,1,196,220c-19.85,0-36-17.94-36-40s16.15-40,36-40a33.39,33.39,0,0,1,18.71,5.8,12,12,0,1,1-13.42,19.89A9.39,9.39,0,0,0,196,164c-6.5,0-12,7.33-12,16s5.5,16,12,16a9,9,0,0,0,2.7-.42A12,12,0,0,1,208,176h4a12,12,0,0,1,12,12ZM80,152v38a30,30,0,0,1-60,0,12,12,0,0,1,24,0,6,6,0,0,0,12,0V152a12,12,0,0,1,24,0ZM48,120a12,12,0,0,0,12-12V44h76V92a12,12,0,0,0,12,12h48v4a12,12,0,0,0,24,0V88a12,12,0,0,0-3.51-8.48l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68A12,12,0,0,0,48,120ZM160,57l23,23H160Z"/></svg>`;
}
