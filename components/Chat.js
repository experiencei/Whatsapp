import styled  from "styled-components";
import { Avatar ,Button, IconButton} from "@material-ui/core";


function Chat({ id , users}) {
    return (
        <Container>
            <UserAvatar/>
            <p></p>
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