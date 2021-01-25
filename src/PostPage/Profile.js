import React, {useState, useCallback} from 'react';
 import Main from '../MainPage /Main';
 import Languge from '../MainPage /MainVisual/Languge/Languge';
 import Home from '../MainPage /MainVisual/MainvisualMenu/Home';
 import { 
   MainvisualWrapper, 
   MainVisualHeader,
   MainVisualH1,
   MainVisualP,
   MainVisualP2,
   MainVisualP1,
   MainVisualPLinks
 } from '../MainPage /MainVisual/MainVisualStyle';
 import Menu from '../MainPage /MainVisual/Visual/Menu';

 export function Profile() {
    const [toggle,setToggle] = useState(false);
    const [languge,setLanguge] = useState(false);
   
      const onLanguge = useCallback(() => {
        setTimeout(() => {
          setLanguge(search => !search);
        }, 0)
      },[])
      const onToggle = useCallback(() => {
        setTimeout(() => {
          setToggle(toggle => !toggle);
        }, 0)
      }, [])
 
     return (
        <>
        <Main />
        <MainvisualWrapper>
           <MainVisualHeader> 
               <MainVisualP1 onClickCapture={onToggle}>Home
                 {toggle && <Home/>}
                  </MainVisualP1>
               <MainVisualP
               href="https://discord.com/channels/798765103105048657/798765103855173645" 
               target="_blank" 
               arial-label="discord"
               >Discord</MainVisualP>
               <MainVisualPLinks to="Profile" 
               smooth={true} 
               duration={500}
               >Menu</MainVisualPLinks>
               <MainVisualH1>MyBlog</MainVisualH1>
               <MainVisualP2 onClick={onLanguge}>Languge
                 {languge && <Languge/>}
               </MainVisualP2>
               <MainVisualP2>태그</MainVisualP2>
               <MainVisualP2>About</MainVisualP2>
        <Menu />
        </MainVisualHeader>
        </MainvisualWrapper>
        </>
     );
 }


 export default Profile;