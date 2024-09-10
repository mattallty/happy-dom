import SVGElement from '../svg-element/SVGElement.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import SVGAnimatedEnumeration from '../svg-element/SVGAnimatedEnumeration.js';

/**
 * SVG ClipPath Element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGClipPathElement
 */
export default class SVGClipPathElement extends SVGElement {
	// Internal properties
	public [PropertySymbol.clipPathUnits]: SVGAnimatedEnumeration | null = null;

	/**
	 * Returns clipPathUnits.
	 *
	 * @returns ClipPathUnits.
	 */
	public get clipPathUnits(): SVGAnimatedEnumeration {
		if (!this[PropertySymbol.clipPathUnits]) {
			this[PropertySymbol.clipPathUnits] = new SVGAnimatedEnumeration(
				PropertySymbol.illegalConstructor,
				this,
				'clipPathUnits',
				['userSpaceOnUse', 'objectBoundingBox'],
				'userSpaceOnUse'
			);
		}
		return this[PropertySymbol.clipPathUnits];
	}
}
