import React from 'react'
import Image from 'next/image'
import { Logo1, Logo2, Logo3 } from 'ui'

export default function Clientes(){
    return(
        <section className='block' id='clientes'>
            <div className='holder'>
                <div className='container-fluid'>
                    <h4>Algunos de los clientes que han confiado en nosotros</h4>
                    <div className='row'>
                        <div>
                            <Image src={Logo1} />
                        </div>
                        <div>
                            <Image src={Logo2} />
                        </div>
                        <div>
                            <Image src={Logo3}  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}