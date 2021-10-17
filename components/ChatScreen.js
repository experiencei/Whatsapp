import { Avatar } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components"
import { auth } from "../firebase";

function ChatScreen({ chat , messages}) {
    const [user] = useAuthState(auth);
    const router = useRouter();
     
    return (
        <Container>
             <Header>
                 <Avatar/>
                 <HeaderInformation>
                     <h3>Rec Email</h3>
                     <p>lastn seen ...</p>
                 </HeaderInformation>
             </Header>
             <HeaderIcons>

             </HeaderIcons>
        </Container>
    )
}

export default ChatScreen;

const Container = styled.div`
  
`;

const Header = styled.div`

`;

const HeaderInformation = styled.div`

`;

const HeaderIcons = styled.div`

`;