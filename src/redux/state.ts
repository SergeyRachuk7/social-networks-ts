
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




export type StoreType = {
      _state: RootStateType 
      changeNewText: (newText: string) => void 
      addPost: (postText: string) => void 
      _onChange: () => void 
      subcribe: (callback: () => void) => void 
      getState: () => RootStateType 
      dispatch: (action: ActionsTypes) => void
}  
 


export type ActionsTypes =  ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC >

export const addPostAC = (postText: string) => {
    return {
        type :  "ADD-POST",
        postText: postText
    } as const
}  


export const changeNewTextAC = (newText: string) => {
    return {
        type :  "CHENGE-NEW-TEXT",
        newText: newText
    } as const
}

const store: StoreType = {
     _state:  {
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

 
}, changeNewText(newText: string)  {
      this._state.profilePage.messageForNewPost = newText; 
      this._onChange()  
   },  
   addPost(postText: string )  { 
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText, 
        likesCount:0
    }
   this._state.profilePage.posts.push(newPost); 
   this._onChange() 
  }, 
  _onChange () {
    console.log("state chenged")
},
  subcribe(callback)  {
    this._onChange = callback;  
  },   
  getState() {
      return this._state;
  }, 
  dispatch(action) {
      if(action.type ===  "ADD-POST") {
           const newPost: PostType = {
        id: new Date().getTime(),
        message:action.postText, 
        likesCount:0
    }
      this._state.profilePage.posts.push(newPost) 
      this._onChange() 
    } else if (action.type === "CHENGE-NEW-TEXT") {
      this._state.profilePage.messageForNewPost = action.newText; 
      this._onChange()  
    }
  } 
}


export default store; 

