import heroBg from '../assets/img/hero-bg.jpg';
import { NoRide } from './noRide';
import NoWait from './noWait';
import OurService from './ourService';
import WithOutHassle from './withOutHassle';

export const Hero = ()=> {
    return (
        <>
        <section class="th-hero" style={{ backgroundImage: `url(${heroBg})`,  }} >
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-xxl-9 col-lg-8">
                    <div class="logo-icon mb-4">
                        {/* <img src="assets/img/logo-big.svg" alt="img" /> */}
                    </div>
                    <h1 class="hero-title text-white">"Seamless rides, Every destination."</h1>
                    <h3 style={{color: 'white'}}>No ride Hailing now</h3>
                </div>
            </div>
        </div>
    </section>
    <section style={{marginTop: '100px', }} className="hidden md:block lg:block lg:mb-[30px] sm:mb-2"> 

    <div class="container th-container text-center" >
        {/* <div class="hero-thumb-wrap">
            <div class="hero-thumb2 jump" className='w-[50%]'><NoWait /></div>
            <div class="hero-thumb3 jump" className='w-[50%]'><NoRide /></div>
            <div class="hero-thumb4 jump-reverse" className='w-[50%]'> <NoWait /></div>
            <div class="hero-thumb5 jump-reverse" className='w-[50%]'><NoRide /></div>
            
        </div> */}

<div className="flex flex-wrap justify-center items-center gap-4">
    <div className="hero-thumb2 jump" style={{ width: '500px' }}>
        <NoWait />
    </div>
    <div className="hero-thumb3 jump" style={{ width: '500px' }}>
        <NoRide />
    </div>
    <div className="hero-thumb4 jump-reverse" style={{ width: '500px' }}>
        <WithOutHassle />
    </div>
    <div className="hero-thumb5 jump-reverse" style={{ width: '500px' }}>
        <OurService />
    </div>
</div>


        {/* <div class="hero-thumb-wrap" className="flex  justify-center items-center gap-4">
    <div className="hero-thumb2 jump flex-grow-0"><NoWait /></div>
    <div className="hero-thumb3 jump flex-grow-0"><NoRide /></div>
    <div className="hero-thumb4 jump-reverse flex-grow-0"><NoWait /></div>
    <div className="hero-thumb5 jump-reverse flex-grow-0"><NoRide /></div>
</div> */}

    </div>
    </section>

    <div className="block lg:hidden">
    <NoWait />
    <NoRide />
    <WithOutHassle />
    <OurService />

</div>
 
    </>
    )
}
