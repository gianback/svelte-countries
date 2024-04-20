import {writable, } from 'svelte/store'
import {browser} from '$app/environment'


const initialValue = browser ? (localStorage.getItem('theme') || 'light') : 'light'

export const theme = writable<string>(initialValue);

theme.subscribe((value) => {
    if(browser){
        localStorage.setItem('theme', value)
    }
})
