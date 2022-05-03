import { LoginStore } from "./Login.store";

export const loginStore = LoginStore.create({
    contents:[
        {
            id: '1',
            user: 'test',
            passwd: 'test'
        },
        {
            id: '2',
            user: 'pesterean',
            passwd: 'marin123'
        },
        {
            id: '3',
            user: 'mark31',
            passwd: 'marin123'
        },
        {
            id: '4',
            user: 'profesor',
            passwd: 'profesor'
        }
    ]
})