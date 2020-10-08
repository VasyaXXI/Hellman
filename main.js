function rand(m, n) {
  return m + Math.floor((n - m + 1)*Math.random());
}

function diffry(m, n, k) {
  return (Math.pow(m, k))%n;

}

var bob = {
  g: 0,
  p: 11,
  personal_key: 0,
  private_key: 0
};

var alice = {
  g: 7,
  p: 0,
  personal_key: 0,
  private_key: 0
};

bob.g = alice.g; //обмен первым числом
alice.p = bob.p; //обмен вторым числом
bob.personal_key = rand(1, 10); //генерация рандомного ключа Боба
alice.personal_key = rand(1, 10);//генерация рандомного ключа Алисы

alice.private_key = diffry(alice.g, alice.p, bob.personal_key);//обмен персональными ключами
bob.private_key = diffry(bob.g, bob.p, alice.personal_key);

alice.private_key = diffry(alice.private_key, alice.p , alice.personal_key);//высчитывание общего приватного ключа
bob.private_key = diffry(bob.private_key, bob.p, bob.personal_key);

console.log(alice.private_key + " = " + bob.private_key);
