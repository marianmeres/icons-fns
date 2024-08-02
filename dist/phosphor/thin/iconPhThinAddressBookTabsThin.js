export const iconPhThinAddressBookTabsThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm-20,64h24v56H188Zm24-52V92H188V44h20A4,4,0,0,1,212,48ZM44,208V48a4,4,0,0,1,4-4H180V212H48A4,4,0,0,1,44,208Zm164,4H188V164h24v44A4,4,0,0,1,208,212Zm-60.12-45a36.24,36.24,0,0,0-20.44-23.67,28,28,0,1,0-30.88,0A36.28,36.28,0,0,0,76.13,167,4,4,0,0,0,79,171.87a3.87,3.87,0,0,0,1,.13,4,4,0,0,0,3.87-3C87,157,99.05,148,112,148s25.05,9,28.12,21a4,4,0,0,0,7.76-2ZM92,120a20,20,0,1,1,20,20A20,20,0,0,1,92,120Z"/></svg>`;
}
