import React,{ useState } from 'react'

export default function TopButton() {
    let goToTop = document.getElementById('btn');
    const [visibleTop, setVisibleTop] = useState("none");
    
    const scrollFunction = () => {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            setVisibleTop(true);
        } else {
            setVisibleTop(false);
        }
    }
    window.addEventListener('scroll', scrollFunction);

    const leadToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

  return (
    <button type='button' className='btn btn-danger' id='topbtn' style={{position: "fixed",bottom:"4.5vh", right:"3vh",width:"10vh", display: visibleTop ? 'block' : 'none'}} onClick={leadToTop}>Top &uarr;</button>
  )
}
