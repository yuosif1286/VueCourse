// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
        name:'yuosif raed',
    }),
    actions:{
        incrementation(): void{
            this.count++;
        },
        decremental():void{
            this.count--;
        }
    },
    getters:{
        oddOrEven(): string{
            if (this.count % 2 ===0)
                return 'Even'
            else
                return 'Odd'
        }
    }
})
