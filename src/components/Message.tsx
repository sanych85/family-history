import { useSelector } from 'react-redux';
import { IMessages } from '../redux/reducers/messagesReducer/messagesTypesReducers';
import { RootState } from '../redux/store';
import styled from 'styled-components';

interface WrapperStyles {
  type?: string;
}

const Message = () => {
  const { message, typeMessage, isShowMessage } = useSelector<RootState, IMessages>(
    (state) => state.messages
  );
  console.log('message', message);
  console.log(typeMessage, "type")
  return (
    <>
      {isShowMessage && (
        <Wrapper type={typeMessage}>
          <span className="fdgfdg">{message}</span>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div<WrapperStyles>`
  padding: 20px;
  background-color: ${({ type }) => (type === 'danger' ? 'red' : 'green')};
`;

export default Message;
