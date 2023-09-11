import React from 'react'
import Carousel from '../../../components/carousel/Carousel'
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';

const Home = () => {

    return (

        <main>
            <Carousel />

            <section className='pb-4 my-3 my-xl-5 p-5 d-flex flex-column align-items-center' style={{ backgroundColor: 'black' }}>
                <h2>Nossa História</h2>
                <div style={{ maxWidth: '800px' }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec felis eu mauris consectetur convallis. Nulla facilisi. In hac habitasse platea dictumst. Fusce varius scelerisque ante, a aliquam nunc fermentum nec. Nunc vitae dictum velit, ac ullamcorper neque. Maecenas bibendum justo quis ex lacinia suscipit.
                    </p>
                    <p>
                        Curabitur bibendum justo a magna feugiat, id pellentesque odio laoreet. Nullam dictum tincidunt justo eu consectetur. Nullam quis nunc semper, vestibulum neque ut, fringilla odio. Vivamus ullamcorper, ex eget accumsan dapibus, metus nisl tempor tortor, eu consequat nunc orci eu quam. Ut placerat, urna eget mattis dignissim, lorem leo hendrerit justo, in posuere libero risus at arcu.
                    </p>
                    <p>
                        Phasellus tincidunt, justo a volutpat aliquam, purus augue tincidunt ligula, eu eleifend odio odio ac justo. Duis a libero vel dui venenatis vehicula. In fringilla massa a lectus pellentesque, ut tincidunt elit suscipit. Fusce aliquam ullamcorper purus, eu sagittis leo consectetur eu. Suspendisse potenti. Praesent feugiat tellus ut metus tincidunt, eu facilisis purus laoreet. Nulla facilisi.
                    </p>
                    <p>
                        Donec sed dolor libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam euismod id quam vel euismod. Vestibulum efficitur arcu vitae vehicula. Sed pharetra justo sit amet arcu tempus aliquam. Morbi nec nisl a erat vehicula tristique. Suspendisse euismod sapien a ex tincidunt bibendum.
                    </p>
                </div>
            </section>


            <section className='pb-4 my-3 my-xl-5 p-3' style={{ backgroundColor: 'black' }}>
                <h2 className='text-center'>Saiba aonde pode nos encontrar</h2>

                <div className='d-flex flex-column align-items-center gap-3   flex-lg-row justify-content-center px 3'>
                    <div style={{ width: '325px' }} className='d-flex align-items-center'>
                        <div><DeliveryDiningOutlinedIcon className='fs-1' /></div>
                        <div>
                            <div className='ms-3 mb-1'>IFOOD</div>
                            <div className='ms-3' style={{ fontSize: '13px' }}>Estamos com parceirias: a marmita da bachan RIRI!</div>
                        </div>
                    </div>
                    <div style={{ width: '325px' }} className='d-flex align-items-center'>
                        <div><FestivalOutlinedIcon className='fs-1' /></div>
                        <div>
                            <div className='ms-3 mb-1' >FEIRAS</div>
                            <div className='ms-3' style={{ fontSize: '13px' }}>Confira todas as nossas feiras! Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                        </div>
                    </div>
                    <div style={{ width: '325px' }} className='d-flex align-items-center'>
                        <div><CelebrationOutlinedIcon className='fs-1' /></div>
                        <div>
                            <div className='ms-3 mb-1' >EVENTOS E FESTAS</div>
                            <div className='ms-3' style={{ fontSize: '13px' }}>Temos um calendário cheio de eventos no qual participamos!</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-3 text-center'>
                <div className="embed-responsive embed-responsive-16by9" style={{height:'50vh'}}>
                    <iframe style={{ width: '50%', height: '100%' }} title='home-video' className="embed-responsive-item mx-auto" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                </div>
            </section>

        </main>


    )

}

export default Home;
