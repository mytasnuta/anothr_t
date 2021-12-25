import React from 'react';

import LiveIcone from '../../images/live_img.png' 
import Icone from '../../images/picture1.png' 
import Iconetwo from '../../images/picture1.png'
import Iconethree from '../../images/picture1.png'
import { ServiceContainer,
         ServiceWrapper,
         ServiceCard,
         Image,
         ServicesH2,
         ServiceP,
         Button_course,Btn_Link,
         AnotherImage} from './ServiceElemets'

 const Services = () => {
    return (
        <ServiceContainer id="serivces">
          
           <ServiceWrapper>
             <ServiceCard>
             <AnotherImage src={LiveIcone}  />
             <Image src={Icone} />
             <ServicesH2>Finance for Non-finance Managers</ServicesH2>
             <ServiceP>$350</ServiceP>
             <p>45 videos</p>
             <Button_course>
             <Btn_Link to="/another">Join Now</Btn_Link>
             </Button_course>
             </ServiceCard>

             <ServiceCard>
             <AnotherImage src={LiveIcone}  />
             <Image src={Iconetwo} />
             <ServicesH2>Finance for Non-finance Managers</ServicesH2>
             <ServiceP>$350</ServiceP>
             <p>35 videos</p>
             <Button_course>
             <Btn_Link to="/another">Join Now</Btn_Link>
             </Button_course>
             </ServiceCard>

             <ServiceCard>
             <Image src={Iconethree} />
             <ServicesH2>Finance for Non-finance Managers</ServicesH2>
             <ServiceP>350</ServiceP>
             <p>45 videos</p>
             <Button_course>
             <Btn_Link to="/another">Join Now</Btn_Link>
             </Button_course>
             </ServiceCard>

             <ServiceCard>
             <AnotherImage src={LiveIcone}  />
             <Image src={Icone} />
             <ServicesH2>Finance for Non-finance Managers</ServicesH2>
             <ServiceP>350</ServiceP>
             <p>45 videos</p>
             <Button_course>
             <Btn_Link to="/another">Join Now</Btn_Link>
             </Button_course>
             </ServiceCard>

             <ServiceCard>
             <Image src={Icone} />
             <ServicesH2>Finance for Non-finance Managers</ServicesH2>
             <ServiceP>350</ServiceP>
             <p>45 videos</p>
             {/* <Button_course>
             <Btn_Link to="/another">Join Now</Btn_Link>
             </Button_course> */}
             </ServiceCard>

             <ServiceCard>
             <AnotherImage src={LiveIcone}  />
             <Image src={Icone} />
             <ServicesH2>Finance for Non-finance Managers</ServicesH2>
             <ServiceP>350</ServiceP>
             <p>45 videos</p>
             <Button_course>
             <Btn_Link to="/another">Join Now</Btn_Link>
             </Button_course>
             </ServiceCard>

        
           </ServiceWrapper>
        </ServiceContainer>
    )
}
export default Services


