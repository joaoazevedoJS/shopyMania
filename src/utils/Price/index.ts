import { IFormat } from './types/IFormat';
import { IInstallmentRate } from './types/IInstallmentRate';

class Price {
  static format = ({
    price,
    locale = 'pt-BR',
    currency = 'BRL',
  }: IFormat): string => {
    return Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price / 100);
  };

  static addInstallmentRate = ({
    price,
    installmentRate,
  }: IInstallmentRate): number => {
    const priceInstallment = this.getInstallmentByPrice({
      price,
      installmentRate,
    });

    return priceInstallment + price;
  };

  static getInstallmentByPrice = ({
    price,
    installmentRate,
  }: IInstallmentRate): number => {
    return (price * installmentRate) / 100;
  };
}

export default Price;
