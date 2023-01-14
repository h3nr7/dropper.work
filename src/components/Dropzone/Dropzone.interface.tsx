import { DropEvent, FileRejection } from 'react-dropzone'


export type CallbackType = <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void
