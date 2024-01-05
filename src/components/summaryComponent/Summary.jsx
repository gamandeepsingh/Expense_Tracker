import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import TransactionForm from '../addTransaction/TransactionForm'
import TransactionChartSummary from '../chart/TransactionChartSummary'

export default function Summary({onClose , isOpen ,totalExpense , totalIncome}) {
    return (
        <Box
            p={'6'}
            border={'1px solid'}
            borderColor={'gray.100'}
            overflow={'hidden'}
            background={'white'}
            borderRadius={'10'}
            display={'flex'}
        >
            <Flex
                w={'full'}
                justify={'center'}
                alignItems={'center'}
                flexDir={{
                    base: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row',
                }}
            >
                <Flex flex={1} w={'full'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} ml={'-20'} mr={'2'}>
                        <Heading size={'md'} mb={'4'} color={'gray.600'}>
                            Balance is $ {totalIncome -totalExpense}
                        </Heading>
                        <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'gray.50'} w={'full'} h={'100px'} border={'1px solid'} borderColor={'gray.100'}>
                            <Flex flexDirection={'column'}>
                                <Heading color={'gray.700'}>$ {totalIncome}</Heading>
                                <Text color={'gray.600'}>Total Income</Text>
                            </Flex>
                        </Flex>

                        {/* expense */}
                        <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'gray.50'} w={'full'} h={'100px'} border={'1px solid'} borderColor={'gray.100'}>
                            <Flex flexDirection={'column'}>
                                <Heading color={'gray.700'}>$ {totalExpense}</Heading>
                                <Text color={'gray.600'}>Total Expense</Text>
                            </Flex>
                        </Flex>
                </Flex>


                <Box flex={1} mt={10} ml={'-90px'} mr={'5'} w={'300px'} h={'300px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    {/* Chart Component */}
                    <Heading>
                        
                        <TransactionChartSummary expense={totalExpense} income={totalIncome} />

                    </Heading>
                </Box>
            </Flex>
            <TransactionForm onClose={onClose} isOpen={isOpen} />
        </Box>
    )
}
