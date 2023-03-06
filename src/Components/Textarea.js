import React from "react"
import "./Form.css"
import Draggable, { DraggableCore } from "react-draggable"

export default function Textarea(props) {
    // const [textareaPosition, setTextareaPosition] = React.useState({
    //     posX:0,
    //     posY:50,
    //     dragging:false
    // })
    
    // function handleMouseDown(event){
        
    //     setTextareaPosition(privState=>({
    //         ...privState,
    //         dragging:true
    //     }))
    // }

    // function handleMouseUp(event){
    //     console.log(event.clientX)
    //     setTextareaPosition(privState=>({
    //         ...privState,
    //         dragging:false
    //     }))
    // }

    // function handleMouseMove(event){
    //     if(textareaPosition.dragging){
    //         const dx = event.clientX - textareaPosition.posX;
    //         const dy = event.clientY - textareaPosition.posY;
            
    //         setTextareaPosition(privState=>({
    //             ...privState,
    //             posX:event.clientX,
    //             posY:event.clientY
    //         }))
    //         //event.target.style.top = `${event.target.offsetTop + dy}px`
    //         //event.target.style.left = `${event.target.offsetLeft + dx}px`
    //     }
    // }

        return(
            <Draggable>
            <textarea value={props.text} className="top-text" readOnly
            //style={{ position: 'absolute', top: `${textareaPosition.posY}px`, left: `${textareaPosition.posX}px` }}
            // onMouseDown={handleMouseDown}
            // onMouseUp={handleMouseUp}
            // onMouseMove={handleMouseMove}
            > </textarea>
            </Draggable>
            
        )
    }





