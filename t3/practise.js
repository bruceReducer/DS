const seq = [1, 3, 8, 17, 2];

function findPair(seq, { target: t }) {
  for (i = 0; i < seq.length; i++) {
    let first = seq[i];
    let second = t - first;
    console.log(first, second);

    if (second === seq[i + 1]) {
      return [seq[i], seq[i + 1]];
    }
  }
  return null;
}

const res = findPair(seq, { target: 25 });
console.log(res);
