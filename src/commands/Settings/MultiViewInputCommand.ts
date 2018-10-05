import AbstractCommand from '../AbstractCommand'
import { AtemState } from '../../state'
import { Util } from '../..'
// import { Enums as Enum } from '../..'

export class MultiViewInputCommand extends AbstractCommand {
	static MaskFlags = {
		artFillSource: 1 << 0,
		artCutSource: 1 << 1,
		artOption: 1 << 2,
		artPreMultiplied: 1 << 3,
		artClip: 1 << 4,
		artGain: 1 << 5,
		artInvertKey: 1 << 6,

		borderEnabled: 1 << 7,
		borderBevel: 1 << 8,
		borderOuterWidth: 1 << 9,
		borderInnerWidth: 1 << 10,
		borderOuterSoftness: 1 << 11,
		borderInnerSoftness: 1 << 12,
		borderBevelSoftness: 1 << 13,
		borderBevelPosition: 1 << 14,
		borderHue: 1 << 15,
		borderSaturation: 1 << 16,
		borderLuma: 1 << 17,
		borderLightSourceDirection: 1 << 18,
		borderLightSourceAltitude: 1 << 19
	}

	rawName = 'MvIn'
    multiViewIndex: number
	properties: {
        windowIndex: number
        source: number
    }

	updateProps (newProps: Partial<{ windowIndex: number, source: number }>) {
		this._updateProps(newProps)
	}

	deserialize (rawCommand: Buffer) {
		this.multiViewIndex = rawCommand[0]
		this.properties = {
            windowIndex: Util.parseNumberBetween(rawCommand[1], 0, 9),
            source: rawCommand.readUInt16BE(2)
		}
	}

	serialize () {
		const buffer = Buffer.alloc(4)

        buffer.writeUInt8(this.multiViewIndex, 0)
        buffer.writeUInt8(this.properties.windowIndex, 1)
        buffer.writeUInt16BE(this.properties.source, 2)

		return Buffer.concat([Buffer.from('CMvI', 'ascii'), buffer])
	}

	applyToState (state: AtemState) {
        if (!state.settings.multiViewerConfig[this.multiViewIndex]) {
            state.settings.multiViewerConfig[this.multiViewIndex] = {
                index: this.multiViewIndex,
                windows: {}
            }
        }
		state.settings.multiViewerConfig[this.multiViewIndex].windows[this.properties.windowIndex] = this.properties.source
	}
}
