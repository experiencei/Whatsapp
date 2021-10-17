import styled  from "styled-components";
import { Avatar ,Button, IconButton} from "@material-ui/core";
import getRecipientEmail from "../utilis/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";


function Chat({ id , users}) {
    
    const [user] = useAuthState(auth)
    const recipientEmail = getRecipientEmail(users, user)
    return (
        <Container>
            <UserAvatar/>
            <p>{recipientEmail}</p>
        </Container>
    )
}

export default Chat

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover{
      background-color : #e9eaeb;
  }
`;
const UserAvatar = styled.div`
    margin: 5px;
    margin-right:15px;
`;