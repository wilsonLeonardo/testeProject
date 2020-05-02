import RNIap, {purchaseUpdatedListener} from 'react-native-iap';

export const initIap = async () => {
  const init = await RNIap.initConnection();
  console.log(init);
};

export const purchased = async productId => {
  let isPurchased = false;
  try {
    const purchases = await RNIap.getAvailablePurchases();

    purchases.forEach(purchases => {
      if (purchases.productId === productId) {
        isPurchased = true;
        return;
      }
    });

    return isPurchased;
  } catch (error) {
    return false;
  }
};

export const requestPurschase = async productId => {
  try {
    await RNIap.requestSubscription(productId);
  } catch (error) {
    console.warn('erro ao recuperar dados');
  }
};

export const fetchAvailableProducts = async productsIds => {
  try {
    const getProducts = await RNIap.getProducts(productsIds);
    console.log(getProducts);
  } catch (error) {
    console.log(error);
  }
};

export const purchaseUpdateSubscription = async () => {
  purchaseUpdatedListener(async purchase => {
    console.log(purchase);
  });
};
