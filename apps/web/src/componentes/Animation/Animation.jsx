import React, { useState, useEffect, useRef }  from 'react'


export default function Animation(){
    const [ back, setBack ] = useState(false)
    const text = useRef(null)
    const Animation = () =>{
        const content = text.current
        if(!content) return
        if(screen.width <= 500){
            if(content.getBoundingClientRect().top <= 1068){
                setBack(true)
            } else{
                setBack(false)
            }
        }else{
            if(content.getBoundingClientRect().top <= 804){
                setBack(true)
            } else{
                setBack(false)
            }
        }
    }
    useEffect(() =>{
        Animation()
        window.addEventListener('scroll', Animation)
    }, [])
    return(
        <section className='block' id='utiliza'>
            <div className="holder">
                <div className="container-fluid">
                    <h4>Utilizar grabados flexográficos para la impresión de etiquetas y empaques permite:</h4>
                    <div className='row'>
                        <div className='content'>
                            <h6 className={`wow ${back ? "animate__animated animate__backInLeft" : ""}`} ref={text} data-wow-delay="0s" data-wow-offset="200" style={!back ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0s", "animationName": "backInLeft"})}>Reducir costos de empaquetado</h6>
                        </div>
                        <div className='content'>
                            <h6 className={`wow ${back ? "animate__animated animate__backInDown" : ""}`} ref={text} data-wow-delay="1.5s" data-wow-offset="200" style={!back ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "1.5s", "animationName": "backInDown"})}>Mínimo desperdicio de materiales</h6>
                        </div>
                        <div className='content'>
                            <h6 className={`wow ${back ? "animate__animated animate__backInRight" : ""}`} ref={text} data-wow-delay="3s" data-wow-offset="200" style={!back ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "3s", "animationName": "backInRight"})}>Producción en grandes volúmenes</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}