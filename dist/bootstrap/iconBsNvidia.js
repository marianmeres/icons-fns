export function iconBsNvidia(props) {
    // Backward compatible signature support: fn(cls, size, style)
    if (props === null || props === undefined)
        props = {};
    if (typeof props !== 'object')
        props = { class: props || '' };
    if (arguments.length > 1)
        props.size ??= arguments[1];
    if (arguments.length > 2)
        props.style ??= arguments[2];
    // 
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M1.635 7.146S3.08 5.012 5.97 4.791v-.774C2.77 4.273 0 6.983 0 6.983s1.57 4.536 5.97 4.952v-.824c-3.23-.406-4.335-3.965-4.335-3.965ZM5.97 9.475v.753c-2.44-.435-3.118-2.972-3.118-2.972S4.023 5.958 5.97 5.747v.828h-.004c-1.021-.123-1.82.83-1.82.83s.448 1.607 1.824 2.07M6 2l-.03 2.017A6.64 6.64 0 0 1 6.252 4c3.637-.123 6.007 2.983 6.007 2.983s-2.722 3.31-5.557 3.31c-.26 0-.504-.024-.732-.065v.883c.195.025.398.04.61.04 2.638 0 4.546-1.348 6.394-2.943.307.246 1.561.842 1.819 1.104-1.757 1.47-5.852 2.657-8.173 2.657a6.84 6.84 0 0 1-.65-.034V14H16l.03-12zm-.03 3.747v-.956a6.4 6.4 0 0 1 .282-.015c2.616-.082 4.332 2.248 4.332 2.248S8.73 9.598 6.743 9.598c-.286 0-.542-.046-.773-.123v-2.9c1.018.123 1.223.572 1.835 1.593L9.167 7.02s-.994-1.304-2.67-1.304a4.9 4.9 0 0 0-.527.031Z"/></svg>`;
}
