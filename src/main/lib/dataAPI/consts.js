export const NOTE_ID_PREFIX = 'note:'
export const FOLDER_ID_PREFIX = 'folder:'
export const TAG_ID_PREFIX = 'tag:'
export const isNoteId = new RegExp(`^${NOTE_ID_PREFIX}.+`)
export const isFolderId = new RegExp(`^${FOLDER_ID_PREFIX}.+`)
export const isTagId = new RegExp(`^${TAG_ID_PREFIX}.+`)
