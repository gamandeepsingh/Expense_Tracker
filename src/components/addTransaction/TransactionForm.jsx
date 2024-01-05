import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

export default function TransactionForm({onClose , isOpen}) {
    const {formData,setFormData,value,setValue,handleFormSumbit} = useContext(GlobalContext)

    function handleFormChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }
    function handleSumbit(event){
        event.preventDefault()
        handleFormSumbit(formData)
    }
    
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
        <form onSubmit={handleSumbit}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Add new Transaction</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Enter Description</FormLabel>
                        <Input 
                        placeholder='Enter transaction description'
                        name='description'
                        type='text'
                        onChange={handleFormChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Enter Amount</FormLabel>
                        <Input 
                        placeholder='Enter transaction Amount'
                        name='amount'
                        type='number'
                        onChange={handleFormChange}
                        />
                    </FormControl>
                    <RadioGroup mt={'5'} value='value' onChange={setValue}>
                        <Radio 
                        checked={formData.type === 'income' }
                        onChange={handleFormChange}
                        mr={4} value='income' colorScheme='blue' name='type'>Income</Radio>
                        <Radio
                        checked={formData.type === 'expense' }
                        onChange={handleFormChange}
                        value='expense' colorScheme='red' name='type'>Expense</Radio>
                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} mr={4}>Cancel</Button>
                    <Button onClick={onClose} type='submit'>Add</Button>
                </ModalFooter>
            </ModalContent>
        </form>
    </Modal>
  )
}
