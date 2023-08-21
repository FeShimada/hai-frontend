import React from 'react'
import Carousel from '../../../components/carousel/Carousel'
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';

const Home = () => {

    return (

        <main>
            <Carousel/>

            <section className='pb-4 my-3 my-xl-5 p-3' style={{backgroundColor: 'black'}}>
                <h2 className='text-center'>Saiba aonde pode nos encontrar</h2>

                <div className='d-flex flex-column align-items-center gap-3   flex-lg-row justify-content-center px 3'>
                    <div style={{width: '325px'}} className='d-flex align-items-center'>
                        <div><DeliveryDiningOutlinedIcon className='fs-1'/></div>
                        <div>
                            <div className='ms-3 mb-1'>IFOOD</div>
                            <div className='ms-3' style={{fontSize:'13px'}}>Estamos com parceirias: a marmita da bachan RIRI!</div>
                        </div>
                    </div>
                    <div style={{width: '325px'}} className='d-flex align-items-center'>
                        <div><FestivalOutlinedIcon className='fs-1'/></div>
                        <div>
                            <div className='ms-3 mb-1' >FEIRAS</div>
                            <div className='ms-3' style={{fontSize:'13px'}}>Confira todas as nossas feiras! Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                        </div>
                    </div>
                    <div style={{width: '325px'}} className='d-flex align-items-center'>
                        <div><CelebrationOutlinedIcon className='fs-1'/></div>
                        <div>
                            <div className='ms-3 mb-1' >EVENTOS E FESTAS</div>
                            <div className='ms-3' style={{fontSize:'13px'}}>Temos um calendário cheio de eventos no qual participamos!</div>
                        </div>
                    </div>
                </div>

            </section>
        </main>


    )

}

export default Home;
