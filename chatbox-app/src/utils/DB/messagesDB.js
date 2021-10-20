import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue } from 'firebase/database'
import * as config from '../../config/config.json'

const firebaseConfig = config["firebase"]

const firebaseApp = initializeApp(firebaseConfig)
const database = getDatabase(firebaseApp)

export function getDatabaseRef() {
    return ref(database, '/')
}

export function addDatabaseOnChangeListener(callback) {
    const dataBaseRef = getDatabaseRef() 

    onValue(dataBaseRef, snapchot => {
        const data = snapchot.val()
        callback(data ? data : {})
    })
}

export async function addDatabaseNewElement(elt) {
    const dataBaseRef = getDatabaseRef()    
    set(dataBaseRef, elt)
}