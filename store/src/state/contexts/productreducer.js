export const initialState = {
  data : [],
  error: "",
  loading: true
}

export const reducer = (state, action)=>{
  switch (action.type) {
    case "success":
      return{
        data: action.payload,
        error: "",
        loading: false
      }
      case 'error':
         return{
        data:{},
        error: "Something went wrong",
        loading: false
      }
  
    default:
     return  state;
  }
}