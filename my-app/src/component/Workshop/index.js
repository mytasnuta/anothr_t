import React from 'react';
import picture from '../../images/peopleone.png'
import picturetwo from '../../images/peopletwo.png'
import { ServiceContainer,
         ServiceWrapper,
         ServiceCard,
         Image,
         ServicesH2,
         ServiceP,
         Button_course,Btn_Link,
         AnotherImage,
         Imagerow,
         Servicerow} from './Workshopelements'

 const WorskShop = () => {
    return (
        <ServiceContainer id="workshop">
          
           <ServiceWrapper>
             <ServiceCard>
             
             <Servicerow>
             <ServicesH2>Channel1</ServicesH2>
             <Button_course>
             <Btn_Link to="/another">Watch</Btn_Link>
             </Button_course>
             </Servicerow>
             <ServiceP>5:30pm -6pm</ServiceP>
             <p>Data science:processes, algorithms and systems </p>
             <Imagerow>
             <AnotherImage src={picturetwo}  />
             <AnotherImage src={picture}  />
             </Imagerow>
             </ServiceCard>








             <ServiceCard>
             
             <Servicerow>
             <ServicesH2>Channel1</ServicesH2>
             <Button_course>
             <Btn_Link to="/another">Watch</Btn_Link>
             </Button_course>
             </Servicerow>
             <ServiceP>5:30pm -6pm</ServiceP>
             <p>Data science:processes, algorithms and systems </p>
             <Imagerow>
             
             <AnotherImage src={picture}  />
             </Imagerow>
             </ServiceCard>



             <ServiceCard>
             
             <Servicerow>
             <ServicesH2>Channel1</ServicesH2>
             <Button_course>
             <Btn_Link to="/another">Watch</Btn_Link>
             </Button_course>
             </Servicerow>
             <ServiceP>5:30pm -6pm</ServiceP>
             <p>Data science:processes, algorithms and systems </p>
             <Imagerow>
             <AnotherImage src={picturetwo}  />
             <AnotherImage src={picture}  />
             </Imagerow>
             </ServiceCard>


             <ServiceCard>
             
             <Servicerow>
             <ServicesH2>Channel4</ServicesH2>
             <Button_course>
             <Btn_Link to="/another">Watch</Btn_Link>
             </Button_course>
             </Servicerow>
             <ServiceP>7:30pm -9:00pm</ServiceP>
             <p>Data science:processes, algorithms and systems </p>
             <Imagerow>
             <AnotherImage src={picturetwo}  />
             
             
             </Imagerow>
             </ServiceCard>

             

            

             

             
             
           </ServiceWrapper>
        </ServiceContainer>
    )
}
export default WorskShop


