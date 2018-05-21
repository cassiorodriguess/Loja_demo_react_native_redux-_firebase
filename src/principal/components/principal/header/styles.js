import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    goLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90
    },
    isLogado: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 120,
    backgroundColor: '#000'
    },
    goCadastro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150
    },
    logout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 70
    },
    cart: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
    },
    logar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 55,
    justifyContent: 'space-between',
    },
    Text: {
    fontSize: 20,
    },
    headerNome: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    headerCadastrese: {
    justifyContent: 'space-between',
    width: 160,
    alignItems: 'center'
    },
    headerCarrinho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 55,
    alignItems: 'center'
    },
});

export default styles;
