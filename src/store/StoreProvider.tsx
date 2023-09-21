import { store } from './store';
import { Provider } from 'react-redux';

type Props = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: Props) => <Provider store={store}>{children}</Provider>;

export default StoreProvider;
