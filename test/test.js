const assert = require('assert');
const rupiah = require('../index.js');

describe('Function', () => {
  describe('#wording()', () => {
    describe('basic functionality', () => {
      it('function called successfully', (done) => {
        rupiah.wording('AAA');
        done();
      });
      it('should return "Nol Rupiah" when the value is not presented', () => {
        assert.equal(rupiah.wording(), 'Nol Rupiah');
      });
      it('should return the current value when the value is presented', () => {
        assert.equal(rupiah.wording(5000), 'Lima Ribu Rupiah');
      });
    })
    describe('edge cases', () => {
      it('should return "Sebelas Rupiah" when the value is 11', () => {
        assert.equal(rupiah.wording(11), 'Sebelas Rupiah');
      });
      it('should return "Tujuh Puluh Tiga Rupiah" when the value is 73', () => {
        assert.equal(rupiah.wording(73), 'Tujuh Puluh Tiga Rupiah');
      });
      it('should return "Seratus Lima Puluh Delapan Rupiah" when the value is 158', () => {
        assert.equal(rupiah.wording(158), 'Seratus Lima Puluh Delapan Rupiah');
      });
      it('should return "Tiga Ratus Dua Puluh Sembilan Rupiah" when the value is 329', () => {
        assert.equal(rupiah.wording(329), 'Tiga Ratus Dua Puluh Sembilan Rupiah');
      });
      it('should return "Seribu Rupiah" when the value is 1000', () => {
        assert.equal(rupiah.wording(1000), 'Seribu Rupiah');
      });
      it('should return "Empat Ribu Seratus Lima Puluh Rupiah" when the value is 4150', () => {
        assert.equal(rupiah.wording(4150), 'Empat Ribu Seratus Lima Puluh Rupiah');
      });
      it('should return "Tiga Belas Ribu Seratus Lima Puluh Rupiah" when the value is 13150', () => {
        assert.equal(rupiah.wording(13150), 'Tiga Belas Ribu Seratus Lima Puluh Rupiah');
      });
      it('should return "Sembilan Puluh Sembilan Ribu Rupiah" when the value is 99000', () => {
        assert.equal(rupiah.wording(99000), 'Sembilan Puluh Sembilan Ribu Rupiah');
      });
      it('should return "Seratus Tujuh Puluh Tiga Ribu Dua Ratus Lima Puluh Rupiah" when the value is 173250', () => {
        assert.equal(rupiah.wording(173250), 'Seratus Tujuh Puluh Tiga Ribu Dua Ratus Lima Puluh Rupiah');
      });
      it('should return "Empat Ratus Sembilan Puluh Dua Ribu Lima Ratus Tiga Puluh Empat Rupiah" when the value is 492534', () => {
        assert.equal(rupiah.wording(492534), 'Empat Ratus Sembilan Puluh Dua Ribu Lima Ratus Tiga Puluh Empat Rupiah');
      });
      it('should return "Satu Juta Tujuh Ratus Lima Puluh Ribu Rupiah" when the value is 1750000', () => {
        assert.equal(rupiah.wording(1750000), 'Satu Juta Tujuh Ratus Lima Puluh Ribu Rupiah');
      });
      it('should return "Dua Puluh Tiga Juta Lima Ratus Lima Puluh Ribu Rupiah" when the value is 23550000', () => {
        assert.equal(rupiah.wording(23550000), 'Dua Puluh Tiga Juta Lima Ratus Lima Puluh Ribu Rupiah');
      });
      it('should return "Enam Ratus Tujuh Puluh Sembilan Juta Rupiah" when the value is 679000000', () => {
        assert.equal(rupiah.wording(679000000), 'Enam Ratus Tujuh Puluh Sembilan Juta Rupiah');
      });
      it('should return "Satu Miliar Rupiah" when the value is 1000000000', () => {
        assert.equal(rupiah.wording(1000000000), 'Satu Miliar Rupiah');
      });
      it('should return "Dua Belas Miliar Tiga Ribu Rupiah" when the value is 12000003000', () => {
        assert.equal(rupiah.wording(12000003000), 'Dua Belas Miliar Tiga Ribu Rupiah');
      });
      it('should return "Delapan Ratus Sembilan Puluh Lima Miliar Tujuh Ratus Dua Juta Lima Ratus Tiga Ribu Rupiah" when the value is 895702503000', () => {
        assert.equal(rupiah.wording(895702503000), 'Delapan Ratus Sembilan Puluh Lima Miliar Tujuh Ratus Dua Juta Lima Ratus Tiga Ribu Rupiah');
      });
    })
  })
})