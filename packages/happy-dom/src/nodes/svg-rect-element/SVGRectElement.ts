import SVGGeometryElement from '../svg-geometry-element/SVGGeometryElement.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import SVGAnimatedLength from '../svg-element/SVGAnimatedLength.js';

/**
 * SVG Rect Element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGRectElement
 */
export default class SVGRectElement extends SVGGeometryElement {
	// Internal properties
	public [PropertySymbol.x]: SVGAnimatedLength | null = null;
	public [PropertySymbol.y]: SVGAnimatedLength | null = null;
	public [PropertySymbol.width]: SVGAnimatedLength | null = null;
	public [PropertySymbol.height]: SVGAnimatedLength | null = null;
	public [PropertySymbol.rx]: SVGAnimatedLength | null = null;
	public [PropertySymbol.ry]: SVGAnimatedLength | null = null;

	/**
	 * Returns x position.
	 *
	 * @returns X position.
	 */
	public get x(): SVGAnimatedLength {
		if (!this[PropertySymbol.x]) {
			this[PropertySymbol.x] = new SVGAnimatedLength(PropertySymbol.illegalConstructor, this, 'x');
		}
		return this[PropertySymbol.x];
	}

	/**
	 * Returns y position.
	 *
	 * @returns Y position.
	 */
	public get y(): SVGAnimatedLength {
		if (!this[PropertySymbol.y]) {
			this[PropertySymbol.y] = new SVGAnimatedLength(PropertySymbol.illegalConstructor, this, 'y');
		}
		return this[PropertySymbol.y];
	}

	/**
	 * Returns width.
	 *
	 * @returns Width.
	 */
	public get width(): SVGAnimatedLength {
		if (!this[PropertySymbol.width]) {
			this[PropertySymbol.width] = new SVGAnimatedLength(
				PropertySymbol.illegalConstructor,
				this,
				'width'
			);
		}
		return this[PropertySymbol.width];
	}

	/**
	 * Returns height.
	 *
	 * @returns Height.
	 */
	public get height(): SVGAnimatedLength {
		if (!this[PropertySymbol.height]) {
			this[PropertySymbol.height] = new SVGAnimatedLength(
				PropertySymbol.illegalConstructor,
				this,
				'height'
			);
		}
		return this[PropertySymbol.height];
	}

	/**
	 * Returns rx.
	 *
	 * @returns Rx.
	 */
	public get rx(): SVGAnimatedLength {
		if (!this[PropertySymbol.rx]) {
			this[PropertySymbol.rx] = new SVGAnimatedLength(
				PropertySymbol.illegalConstructor,
				this,
				'rx'
			);
		}
		return this[PropertySymbol.rx];
	}

	/**
	 * Returns ry.
	 *
	 * @returns Ry.
	 */
	public get ry(): SVGAnimatedLength {
		if (!this[PropertySymbol.ry]) {
			this[PropertySymbol.ry] = new SVGAnimatedLength(
				PropertySymbol.illegalConstructor,
				this,
				'ry'
			);
		}
		return this[PropertySymbol.ry];
	}
}
