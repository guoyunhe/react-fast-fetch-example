export default function slowFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url).then(resolve).catch(reject);
    }, 3000);
  });
}
