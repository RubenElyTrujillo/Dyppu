import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Img11, Img12, Img13, Img14, Img15 } from 'ui'

export default function Carousel(){
    return(
        <section className='block' id='carousel'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="text">
                            <h4>Nuestro proceso de fabricación de placas flexográficas</h4>
                        </div>
                        <div className="carousels">
                            <Swiper
                                slidesPerView={2}
                                slidesPerGroup={3}
                                loop={true}
                                className="carousel"
                            >
                                <SwiperSlide className='tarjeta'>
                                    <div className='imagen' >
                                        <Image src={Img11} fill />
                                    </div>
                                    <div className='content'>
                                        <h5>Preprensa</h5><br />
                                        <p>Comprobación y verificación de los archivos para la completa resolución de trapping y distorsiones adecuadas.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='tarjeta'>
                                    <div className='imagen' >
                                        <Image src={Img12} fill />
                                    </div>
                                    <div className='content'>
                                        <h5>Negativos</h5><br />
                                        <p>Se expone con luz ultravioleta la película negativa tanto en formato análogo como digital (CTP).</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='tarjeta'>
                                    <div className='imagen' >
                                        <Image src={Img13} fill />
                                    </div>
                                    <div className='content'>
                                        <h5>Grabado</h5><br />
                                        <p>Grabado de fotopolímero en alto relieve.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='tarjeta'>
                                    <div className='imagen' >
                                        <Image src={Img14} fill />
                                    </div>
                                    <div className='content'>
                                        <h5>Montaje</h5><br />
                                        <p>Pegado de placas en sticky back sobre base plástica (mylar) para impresión en cajas de cartón.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='tarjeta'>
                                    <div className='imagen' >
                                        <Image src={Img15} fill />
                                    </div>
                                    <div className='content'>
                                        <h5>Servicio</h5><br />
                                        <p>A toda la República Mexicana en menos de 48 horas. </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}