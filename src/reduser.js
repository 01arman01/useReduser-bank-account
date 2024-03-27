export   function reduser (state, action ) {
  switch (action.type){
    //   closeAccount, created,deposed, withdraw, loanAdded,loanClosed,
    case 'createAccount':
        if (state.status === 'closeAccount') {
            return {
                ...state,
                isActive: true,
                status: 'created'
            }
        }else return state
      case 'addDeposit':
          if(state.status === 'created'){
              return {
                 ...state,
                  balance: state.balance + action.payload,
                  status:'deposed'
              }
          }else return state
      case "withdraw":
          if(state.balance >= action.payload){
          return {
              ...state,
              balance: state.balance - action.payload
          }}else return state
      case'loanAdded':
          if (state.status === 'deposed'){
          return {
              ...state,
              loan:action.payload,
              status :'loan',
          }}else return state
  }

}