import React from 'react'
import { MaintanceContainer,MaintanceImg,MaintanceTitle, MaintanceText, MaintanceDesc} from './styled'
const Maintance = () => {
  return (
    <MaintanceContainer>
        <MaintanceImg>
            <img src="/img/building.png" alt="" />
        </MaintanceImg>
        <MaintanceText>
        <MaintanceTitle>Site em manutenção 😥</MaintanceTitle>
        <MaintanceDesc>Perdão pelo incoveniente, novas infos em breve!</MaintanceDesc>
        </MaintanceText>
    </MaintanceContainer>
  )
}

export default Maintance