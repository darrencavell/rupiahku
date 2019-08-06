const wording = (nominal, currency) => {
  const _isNominalValid = (nominal) => {
    const regex = new RegExp(/^\d+$/);
    return !regex.test(nominal);
  }
  const _nominalWording = (nominal) => {
    const UNIQUE_TWELVE = 12;
    const UNIQUE_TWENTY = 20;
    const UNIQUE_TWO_HUNDRED = 200;
    const UNIQUE_TWO_THOUSAND = 2000;
    const UNIQUE_NAMING = [
      '', 'Satu ', 'Dua ', 'Tiga ', 'Empat ', 'Lima ',
      'Enam ', 'Tujuh ', 'Delapan ', 'Sembilan ', 'Sepuluh ',
      'Sebelas '
    ];
    const TEN = 10;
    const ONE_HUNDRED = 100;
    const ONE_THOUSAND = 1000;
    const ONE_MILLION = 1000000;
    const ONE_BILLION = 1000000000;
    const ONE_TRILLION = 1000000000000;
    if (nominal < ONE_HUNDRED) {
      if (nominal < UNIQUE_TWELVE)
        return UNIQUE_NAMING[nominal];
      if (nominal < UNIQUE_TWENTY)
        return _nominalWording(nominal % TEN) + 'Belas ';
      return _nominalWording(Math.floor(nominal / TEN)) + 'Puluh ' + _nominalWording(nominal % TEN);
    }
    if (nominal < ONE_THOUSAND) {
      if (nominal < UNIQUE_TWO_HUNDRED)
        return 'Seratus ' + _nominalWording(nominal % ONE_HUNDRED);
      return _nominalWording(Math.floor(nominal / ONE_HUNDRED)) + 'Ratus ' + _nominalWording(nominal % ONE_HUNDRED);
    }
    if (nominal < ONE_MILLION) {
      if (nominal < UNIQUE_TWO_THOUSAND)
        return 'Seribu ' + _nominalWording(nominal % ONE_THOUSAND);
      return _nominalWording(Math.floor(nominal / ONE_THOUSAND)) + 'Ribu ' + _nominalWording(nominal % ONE_THOUSAND);
    }
    if (nominal < ONE_BILLION)
      return _nominalWording(Math.floor(nominal / ONE_MILLION)) + 'Juta ' + _nominalWording(nominal % ONE_MILLION);
    return _nominalWording(Math.floor(nominal / ONE_BILLION)) + 'Miliar ' + _nominalWording(nominal % ONE_BILLION);
  }
  if (_isNominalValid(nominal))
    return 'Nol Rupiah';
  return _nominalWording(nominal) + currency;
}
module.exports = {
  wording
}