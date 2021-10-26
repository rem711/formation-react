import { initializeApp } from 'firebase/app'
import { getDatabase, set, ref, onValue, off, get } from 'firebase/database'
import * as config from '../../config/config.json'

const firebaseConfig = config["firebase"]

export const firebaseApp = initializeApp(firebaseConfig)
const database = getDatabase(firebaseApp)

function getDatabaseRef(user, field = undefined) {
    return ref(database, `/${user}/${field ? field + '/' : ''}`)
}

export async function updateDatabaseRecipes(user, recipe) {
    const dataBaseRef = getDatabaseRef(user, 'recettes')    
    set(dataBaseRef, recipe)
}

export function addDatabaseRecipesListener(user, callback) {
    const dataBaseRef = getDatabaseRef(user, 'recettes') 

    onValue(dataBaseRef, snapchot => {
        const data = snapchot.val()
        callback(data ? data : {})
    })
}

export function removeDatabaseRecipesListener(user) {
    const dataBaseRef = getDatabaseRef(user, 'recettes')
    off(dataBaseRef)
}

export async function getDatabaseBox(user) {
    const dataBaseRef = getDatabaseRef(user)
    
    try {
        const snapchot = await get(dataBaseRef)

        if (snapchot.exists()) return snapchot.val()
        else return {}
    }
    catch (err) {
        throw err
    }
}

export function addDatabaseChefToBox(user, chef) {
    const dataBaseRef = getDatabaseRef(user, 'chef')    
    set(dataBaseRef, chef)
}