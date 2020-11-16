import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import DateInput from '../../components/DateInput';

export const ImageS = styled.Image`
  height: 150px;
  width: 300px;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const FormatButton = styled(Button)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const SignLinkText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 16px;
`;
export const SocialText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 100px;
`;

export const SocialMediaIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const BaseIcon = styled.View`
  padding: 10px;
  border-radius: 32.5px;
  height: 65px;
  justify-content: center;
  border: ${(props) => (props.border ? props.border : 'rgba(0,0,0,0)')} 2px;
`;

export const ImageIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;

export const Image = styled.Image`
  width: 72px;
  height: 85px;
  margin-top: 20px;
`;

export const ViewDoubleInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextDate = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
`;

export const FormInputSmall = styled(DateInput)`
  width: 50%;
`;

export const BoxText = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 11px;
  text-align: left;
`;
