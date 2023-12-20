import { ButtonContainer, Container } from './style';
import Button from '../FormFields/Button';
import Input from '../FormFields/Input';
import Select from '../FormFields/Select';
import FieldGroup from '../FieldGroup';

import PropTypes from 'prop-types';

export default function ContactForm({ buttonLabel }) {
  return (
    <Container>
      <FieldGroup>
        <Input type="text" name="name" placeholder="Nome" />
      </FieldGroup>

      <FieldGroup>
        <Input type="email" name="email" placeholder="E-mail" />
      </FieldGroup>

      <FieldGroup>
        <Input type="tel" name="tel" placeholder="Telefone" />
      </FieldGroup>

      <FieldGroup>
        <Select name="categoria">
          <option value="Instagram">Instagram</option>
          <option value="Instagram">Facebook</option>
        </Select>
      </FieldGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Container>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string,
};
