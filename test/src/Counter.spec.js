const mocha = require('mocha');
const assert = require('power-assert');
const Counter = require('../../src/Counter');

describe( 'src/Counter.jsのテスト', () => {
    it('_countプロパティを持つ', () => {
        const counter = new Counter();
        assert.equal(counter.hasOwnProperty('_count'), true);
    });
    it('_countプロパティの初期値は0である', () => {
        const counter = new Counter();
        assert.equal(counter._count === 0, true);
    });
    it('incrementメソッドを持つ', () => {
        const counter = new Counter();
        assert.equal(typeof counter.increment === 'function', true);
    });
    it('incrementメソッドを実行すると_countプロパティの値は1増やす', () => {
        const counter = new Counter();
        assert.equal(counter._count, 0);
        counter.increment();
        assert.equal(counter._count, 1);
    });
    it('decrementメソッドを持つ', () => {
        const counter = new Counter();
        assert.equal(typeof counter.decrement === 'function', true);
    });
    it('decrementメソッドを実行すると_countプロパティの値は1減る', () => {
        const counter = new Counter();
        assert.equal(counter._count, 0);
        counter.decrement();
        assert.equal(counter._count, -1);
    });
});