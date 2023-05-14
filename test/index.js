import assert from 'node:assert/strict';
import {
	iconBs0Circle,
	iconBxRegularAbacus,
	iconBxSolidAddToQueue,
	iconBytesizeActivity,
	iconFeatherActivity,
	iconHeroMiniAcademicCap,
	iconHeroOutlineAcademicCap,
	iconHeroSolidAcademicCap,
} from '../dist/index.js';

console.clear();
console.log('Start');

let svg;

Object.entries({
	iconBs0Circle,
	iconBxRegularAbacus,
	iconBxSolidAddToQueue,
	iconBytesizeActivity,
	iconFeatherActivity,
	iconHeroMiniAcademicCap,
	iconHeroOutlineAcademicCap,
	iconHeroSolidAcademicCap,
}).forEach(([name, icon]) => {
	try {
		// BC signature (cls)
		svg = icon('foo');
		assert(/class="foo"/.test(svg), `${name}(cls)`);

		// BC signature (null, size)
		svg = icon(null, 123);
		assert(!/class="/.test(svg), `${name}(null, 123)`);
		assert(/width="123"/.test(svg), `${name}(null, 123)`);

		// BC signature (cls, size)
		svg = icon('foo', 123);
		assert(/class="foo"/.test(svg), `${name}(foo, 123)`);
		assert(/width="123"/.test(svg), `${name}(foo, 123)`);

		// BC signature (null, null, style)
		svg = icon(null, null, 'bar');
		assert(/style="bar"/.test(svg), `${name}(null, null, bar)`);

		// BC signature (cls, size, style)
		svg = icon('foo', 123, 'bar');
		assert(/class="foo"/.test(svg), `${name}(foo, 123, bar)`);
		assert(/width="123"/.test(svg), `${name}(foo, 123, bar)`);
		assert(/style="bar"/.test(svg), `${name}(foo, 123, bar)`);

		// NEW props signature

		svg = icon({ class: 'foo' });
		assert(/class="foo"/.test(svg), `${name}({ class: 'foo' })`);

		svg = icon({ size: 123 });
		assert(/width="123"/.test(svg), `${name}({ size: 123 })`);

		svg = icon({ style: 'bar' });
		assert(/style="bar"/.test(svg), `${name}({ style: 'bar' })`);

		svg = icon({ class: 'foo', size: 123, style: 'bar', custom: 'bat' });
		assert(/class="foo"/.test(svg), `${name}({ ... })`);
		assert(/width="123"/.test(svg), `${name}({ ... })`);
		assert(/style="bar"/.test(svg), `${name}({ ... })`);
		assert(/custom="bat"/.test(svg), `${name}({ ... })`);

		// stroke-width support
		if (/bytesize|feather/i.test(name)) {
			svg = icon({ strokeWidth: 4 });
			assert(/stroke-width="4"/.test(svg), `${name} stroke-width`);
		}

		console.log(`✔️ ${name}`);
	} catch (e) {
		console.log(`✗ ${name}\n  ${e.stack}`);
	}
});

console.log('Done');
