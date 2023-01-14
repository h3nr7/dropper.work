import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { CallbackType } from './Dropzone.interface'

export function Dropzone() {

    const onDrop = useCallback<CallbackType>(files => {
        // do something
        console.log(files)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ? (
                    <>active</>
                ) : (
                    <>drop something</>
                )
            }
        </div>
    )
}