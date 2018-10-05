export class Settings {
    multiViewerConfig: Array<MultiViewConfig> = []
}

export interface MultiViewConfig {
    index: number
    windows: {
        [index: string]: number
    }
}
