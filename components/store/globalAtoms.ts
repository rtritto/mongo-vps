import { atom } from 'solid-jotai'

export const databasesState = atom<Mongo['databases']>([])
export const collectionsState = atom<Mongo['collections']>({})
export const columnsState = atom<MongoDocument[]>([])
export const documentsState = atom<MongoDocument[]>([])
export const documentCountState = atom<number>(0)
export const selectedDatabaseState = atom<string>('')
export const selectedCollectionState = atom<string>('')
export const databaseStatsState = atom<object>({})  /* TODO type */
export const messageSuccessState = atom<string>('')
export const messageErrorState = atom<string>('')