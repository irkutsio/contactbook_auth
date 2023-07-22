import notFound from 'img/notFound.png';
import { NotFound } from './NotFound.styled';

export const NotFoundPage = () => {
  return (
    <NotFound>
      <h1>Page does not exist</h1>
      <img src={notFound} alt="not Found" />
    </NotFound>
  );
};
