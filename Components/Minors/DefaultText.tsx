
import {Text} from '@chakra-ui/react'

interface TextModel {
    value ?: string , 
    fontSize ?: string ,
    fontWeight ?: string ,
    children ?: string
}

const DefaultText =({children, fontSize , fontWeight}: TextModel)=> {
    return (
        <>

            <Text fontWeight={fontWeight} fontSize={fontSize}  color={'var(--default-text)'} >{children}</Text>
        
        </>
    )
}

export default DefaultText;