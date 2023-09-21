type Props = {
  amount: number;
  currencyCode?: string;
} & React.ComponentProps<'p'>;

const Price = ({ amount, currencyCode = 'PLN', ...props }: Props) => (
  <p suppressHydrationWarning={true} {...props}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(amount)}`}
  </p>
);

export default Price;
