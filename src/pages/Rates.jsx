import { Wave } from 'react-animated-text';

import { Container, Filter, Heading, Loader, RatesList, Section } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestSymbols } from '../redux/currency/operations';
import { useEffect } from 'react';
import {
  selectBaseCurrency,
  selectError,
  selectFilterRates,
  selectIsLoading,
  selectRates,
} from '../redux/selectors';

const Rates = () => {
  const isError = useSelector(selectError);
  const baseCurrency = useSelector(selectBaseCurrency);
  const rates = useSelector(selectRates);
  const isLoading = useSelector(selectIsLoading);
  const filterRates = useSelector(selectFilterRates)

  // console.log(rates);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLatestSymbols(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <Filter/>}
        {filterRates.length > 0 && <RatesList rates={filterRates} />}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
