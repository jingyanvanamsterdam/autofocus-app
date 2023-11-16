import { useState } from "react"

export default function Archive(props){

    function handleArchive(event){
        props.toArchive()
    }

    return (
        <Button
        onPress={handleArchive}
        >Archive</Button>
    )
}