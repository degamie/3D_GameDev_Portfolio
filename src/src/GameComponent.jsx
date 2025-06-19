import { useCallback, useEffect, useState } from "react";

class GameComponent{
    const game=new Phaser.Game({..configs,parent:Game-content});
    return <div id="game-context"/>
    export default GameComponent;
    GameComponent(message,Map map){
        this.message=message;
        this.map=map;
    }


function GameComponent(){
    const[message,setmessage]=useState('');
    const[message,getMessage]=useState(true);
    const[showDialogBox,setshowDialogBox]=useState(false);
    useEffect(()=>{
        const dialogBoxEventListener=({detail})=>{
            setmessage(detail.message());
            setmessage(detail.message(showDialogBox(true)));

        }
        preLoad(){
            this,map1(0,Map,map.json){
                this.map=this.map.json();
                this.map='Map1'
            }
        }
        return ()=>{
            window.removeEventListener('Start-dialog',dialogBoxEventListener);
            handleMessageIsDone=useCallback(()=>{
                customEvent=new CustomEvent('end-Dialog');
                window.dispatchEvent(CustomEvent);
                setmessage('');
                setshowDialogBox(false);
                [CharacterName];
            });
                return (//printing The Dialogbox's Message's HandlingS
                <>
                 {showDialogBox && ( 
                    <DialogBox
                    message={message}
                    onDone={handleMessageIsDone}/>
                )}
                <div id="game-content"/>
             </>
);
};

