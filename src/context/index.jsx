import { createContext, useState } from "react";


export const GlobalContext = createContext()

export default function GlobalState({children}){

    const [formData, setFormData] = useState({
        type:'income',
        amount : 0,
        description : ''
    })
    const [value, setValue] = useState('expense')
    const [totalExpense, setTotalExpense] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [allTransactions, setAllTransactions] = useState([])
    
    function handleFormSumbit(currFormData){
        if(!currFormData.description || !currFormData.amount){
            return
        }
        setAllTransactions(
            [...allTransactions,{...currFormData,id: Date.now() }])
        }
        
        // console.log(allTransactions);

    return <GlobalContext.Provider 
        value={{
            formData,
            setFormData,
            totalExpense,
            setTotalExpense,
            totalIncome,
            setTotalIncome,
            value,
            setValue,
            allTransactions,
            setAllTransactions,
            handleFormSumbit
        }}
        >{children}</GlobalContext.Provider>
}
