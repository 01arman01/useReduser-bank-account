export   function reduser (state, action ) {
  switch (action.type){
    //   closeAccount, created,deposed, withdraw, loanAdded,loanClosed,
    case 'createAccount':
        if (state.status === 'closeAccount') {
            return {
                ...state,
                isActive: true,
                balance: 500,
                status: 'created',
                loanstatus: true
            }
        }else return state
      case 'addDeposit':
          if(state.status === 'created'){
              return {
                 ...state,
                  balance: state.balance + action.payload,
                  // status:'deposed'
              }
          }else return state
      case "withdraw":
          if(state.balance >= action.payload){
          return {
              ...state,
              balance: state.balance - action.payload
          }}else return state
      case'loanAdded':
          if (state.status === 'created' && state.loanstatus){
          return {
              ...state,
              loan:action.payload,
              loanstatus: false,
              balance: state.balance+action.payload
          }}else return state
      case 'payloan':
         if (state.balance >= state.loan && !state.loanstatus && state.status === 'created'){
             return {
                 ...state,
                 balance: state.balance - state.loan,
                 loanstatus:true,
                 loan:0
             }
         }
      case 'closeAccount':
          if (state.balance === 0 && state.loan === 0 && state.isActive){
              return {
                  ...state,
                  balance:0,
                  loan:0,
                  isActive:false,
                  status:'closeAccount',
                  loanstatus:false
              }
          }
      default:return state
  }

}