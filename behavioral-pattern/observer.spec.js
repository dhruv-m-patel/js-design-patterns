import { Subject, Observer } from './observer';

describe('observer', () => {
  test('it should observe increments when subscribed', () => {
    const sub = new Subject();
    const obs1 = new Observer(1);    
    sub.subscribe(obs1);

    const obs2 = new Observer(19);
    sub.subscribe(obs2);
    
    sub.fire('INC');
    
    expect(obs1.state).toEqual(2);
    expect(obs2.state).toEqual(20);
  });

  test('it should not observe increments when unsubscribed', () => {
    const sub = new Subject();
    const obs1 = new Observer(1);    
    sub.subscribe(obs1);
    sub.fire('INC');
    sub.unsubscribe();
    sub.fire('INC')
    
    expect(obs1.state).toEqual(3);
  });
});