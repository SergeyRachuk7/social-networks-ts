import { renderTree } from '../render';

type MessegeType = {
  id: number
  message: string
}  

type DialogType = {
    id: number 
    name: string
}  

export type PostType = {
    id: number 
    message: string 
    likesCount: number
}  

type ProfilePageType = { 
    messageForNewPost: string
    posts: Array<PostType>
} 

type DialogPageType = {
    dialogs: Array<DialogType> 
    messages: Array<MessegeType>
}   

type SidebaType = {}

export type RootStateType = {
    profilePage: ProfilePageType 
    dialogsPage:  DialogPageType 
    sidebar: SidebaType
} 

let state: RootStateType = {
    profilePage: { 
      messageForNewPost: "sms", 
      posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12 }, 
        {id: 2, message: "It\'s my first post", likesCount: 11 }, 
        {id: 3, message: "Blabla", likesCount: 11 },  
        {id: 4, message: "Dada", likesCount: 11 },  
      ]
    }, 
    dialogsPage: {
        dialogs: [
          {id: 1, name: "Dima"},
          {id: 2, name: "Andrew"}, 
          {id: 3, name: "Sveta"},  
          {id: 4, name: "Sasha"},   
          {id: 5, name: "Victor"},    
          {id: 6, name: "Valera"},    
        ], 
        messages: [
          {id: 1, message: "Hi"}, 
          {id: 2, message: "How is your it-kamasutra"}, 
          {id: 3, message: "Yo"}, 
          {id: 4, message: "Yo"}, 
          {id: 5, message: "Yo"}, 
        ] 
    },
    sidebar: {}

} 
 
export const addPost = (postText: string ) => { 
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText, 
        likesCount:0
    }

   state.profilePage.posts.push(newPost); 


   renderTree(state)
} 




export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText; 
    renderTree(state)
}


export default state