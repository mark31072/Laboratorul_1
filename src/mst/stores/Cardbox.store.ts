import {  Instance, types } from "mobx-state-tree";
import { card } from "../models/Cardbox.model";



export const Root$ = types

    .model({
        cards: types.optional(types.array(card),[])
        
    })

    .actions((self) => ({

        addCard (name:string, university:string, age:string, text:string){
            self.cards.push(card.create({name,university,age,text }))

        }


    }) )


export const card$ = Root$.create({
    cards: [] // users is required here because it's not marked as optional
      });
    