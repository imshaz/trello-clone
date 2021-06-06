import React from 'react'
import AddNewItem from './AddNewItem'
import {ColumnContainer, ColumnTitle} from './styles'

interface ColumnProps{
    text:string;
}
function Column({text, children}:React.PropsWithChildren<ColumnProps>) {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}

            <AddNewItem toggleButtonText="+ Add task" onAdd={console.log} dark={true}/>
        </ColumnContainer>
    )
}

export default Column
