import * as path from 'path'
import { v4 as uuidv4 } from 'uuid'
import {diskStorage} from 'multer'

export const createDiskStorage = (destination: string) => {
    return diskStorage({
        destination: `./static/${destination}`,
        filename: (req, file, cb) => {
            const filename = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4()
            const extention = path.parse(file.originalname).ext

            cb(null, `${filename}${extention}`)
        },
    })
}