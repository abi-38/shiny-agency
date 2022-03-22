import StyledLink from '../utils/style/Atoms.js'
import Profils from './Profils'
import Titre from '../utils/style/Titre.js'
import DivPage from '../utils/style/DivPage.js'
import SimpleLink from '../utils/style/SimpleLink.js'
  
function Freelances() {
    return (
        <>
            <DivPage>
                <Titre>Les compétences dont vous avez besoins : UX Design, frontend, backend</Titre>
                <StyledLink to="/freelances" $isFullLink >Découvrez nos profils</StyledLink>
                <p>UX Design<br/>Le rôle est de Lorem ipsum dolor sit omet, consectetur adipiscing elit, sed do eiusmad tempor incididunt ut labare et.</p>
                <br/>
                <p>Frontend<br/>Le rôle est de Lorem ipsum dolor sit omet, consectetur adipiscing elit, sed do eiusmad tempor incididunt ut labare et.</p>
                <SimpleLink to="/freelances">Découvrez nos profils dès maintenant !</SimpleLink> 
            </DivPage>
            <div>
                <Profils />
            </div>
        </>
    )
  }
  
  export default Freelances