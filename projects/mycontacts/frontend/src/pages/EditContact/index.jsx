import ContactForm from '../../components/ContactForm';
import { PageHeader } from '../../components/Pageheader';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar contato" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
